import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainar>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainar>
  );
};

const SContainar = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514a;
`;
