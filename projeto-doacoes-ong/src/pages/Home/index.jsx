import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { Container as Cont, Row, Col } from "react-grid-system";

import {
  Container,
  Header,
  Thead,
  Th,
  Tr,
  Td,
  StyledModal,
  DeleteButton,
  DivTable,
  Table,
} from "./styles.js";

const Home = () => {
  const [error, setError] = useState("");
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [matchIsOpen, setMatchIsOpen] = useState(false);
  const [OngMatch, setOngMatch] = useState();
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [itens, setItens] = useState([]);
  const { user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  const handleCheckMatch = () => {
    if (user.tipo === "ONG")
      itens.forEach((i) => {
        const itensOngs = JSON.parse(localStorage.getItem(`itens_ongs`)) ?? {};
        console.log(itensOngs);
        const { nrocel, rua, numero, bairro, cidade, estado } = user;
        itensOngs[i.codigo] = [
          ...(itensOngs[i.codigo] ?? []),
          { nrocel, rua, numero, bairro, cidade, estado },
        ];
        localStorage.setItem(`itens_ongs`, JSON.stringify(itensOngs));
      });
    else
      itens.forEach((i) => {
        let ItensOngs = JSON.parse(localStorage.getItem("itens_ongs")) ?? {};
        const ongEncontrada = ItensOngs[i.codigo]?.[0];
        if (ongEncontrada !== undefined) {
          setOngMatch(ongEncontrada);
          console.log(ongEncontrada);
          setMatchIsOpen(true);
        }
      });
  };
  const handleSalvarItens = () => {
    setIsOpen(false);
    setItens([...itens, { codigo, descricao }]);
    handleCheckMatch();
  };
  useEffect(() => {
    if (isMounted) return;
    setItens(JSON.parse(localStorage.getItem(`${user.email}.itens`)) ?? []);
    handleCheckMatch();
    setIsMounted(true);
  }, [isMounted]);
  useEffect(() => {
    localStorage.setItem(`${user.email}.itens`, JSON.stringify(itens));
    if (user.tipo === "ONG")
      itens.forEach((i) => {
        const itensOngs = JSON.parse(localStorage.getItem(`itens_ongs`)) ?? {};
        console.log(itensOngs);
        const { nrocel, rua, numero, bairro, cidade, estado } = user;
        itensOngs[i.codigo] = [
          ...(itensOngs[i.codigo] ?? []),
          { nrocel, rua, numero, bairro, cidade, estado },
        ];
        localStorage.setItem(`itens_ongs`, JSON.stringify(itensOngs));
      });
    else
      itens.forEach((i) => {
        let ItensOngs = JSON.parse(localStorage.getItem("itens_ongs")) ?? {};
        const ongEncontrada = ItensOngs[i.codigo]?.[0];
        if (ongEncontrada !== undefined) {
          setOngMatch(ongEncontrada);
          console.log(ongEncontrada);
          setMatchIsOpen(true);
        }
      });
  }, [itens]);

  const handleExcluirItem = (codigoExcluido) => {
    const itensMantidos = itens.filter((i) => i.codigo !== codigoExcluido);
    setItens(itensMantidos);
  };
  return (
    <>
      <Container>
        <Button onClick={() => [signout(), navigate("/")]}>Sair</Button>
        <Container>
          <Header>
            <span>Cadastro de Itens</span>
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
              id="new"
            >
              Incluir
            </Button>
          </Header>

          <DivTable>
            <Table>
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th>Descrição</Th>
                  <Th className="acao">Excluir</Th>
                </Tr>
              </Thead>
              <tbody>
                {itens.map((i) => {
                  return (
                    <Tr key={i.codigo}>
                      <Td>{i.codigo}</Td>
                      <Td>{i.descricao}</Td>
                      <Td>
                        <DeleteButton
                          onClick={() => {
                            handleExcluirItem(i.codigo);
                          }}
                        >
                          Excluir
                        </DeleteButton>
                      </Td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          </DivTable>
          <StyledModal
            onBackgroundClick={() => {
              setIsOpen(false);
            }}
            isOpen={isOpen}
          >
            <Cont>
              <Row>
                <Col sm={4}>
                  <Input
                    type="codigo"
                    placeholder="Informe o Código do Item"
                    value={codigo}
                    onChange={(e) => [setCodigo(e.target.value), setError("")]}
                  />
                </Col>
                <Col sm={4}>
                  <Input
                    type="descricao"
                    placeholder="Informe a descricao"
                    value={descricao}
                    onChange={(e) => [
                      setDescricao(e.target.value),
                      setError(""),
                    ]}
                  />
                </Col>
                <Col sm={4}>
                  <Button onClick={handleSalvarItens}>Salvar</Button>
                </Col>
              </Row>
            </Cont>
          </StyledModal>
          <StyledModal
            onBackgroundClick={() => {
              setMatchIsOpen(false);
            }}
            isOpen={matchIsOpen}
          >
            <Cont>
              <Row>
                <Col sm={6}>
                  <h2>Parabéns!</h2>
                  <p>Você possui um produto que uma ONG está necessitando.</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={7}>
                  <p>
                    Segue abaixo telefone para contato e endereço para a entrega
                    do produto.
                  </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <h3>Contato</h3>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Número telefone: {OngMatch?.nrocel}</label>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <h3>Endereço</h3>
                </Col>
              </Row>
              <Row>
                <Col sm={8}>
                  <label>
                    Rua: {OngMatch?.rua}
                    <br />
                    Número: {OngMatch?.numero}
                    <br />
                    Bairro: {OngMatch?.bairro}
                    <br />
                    Cidade: {OngMatch?.cidade}
                    <br />
                    Estado: {OngMatch?.estado}
                  </label>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <h3>Obrigado por fazer a diferença no mundo!</h3>
                </Col>
              </Row>
            </Cont>
          </StyledModal>
        </Container>
      </Container>
    </>
  );
};

export default Home;
