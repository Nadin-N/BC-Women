import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    width: ${({ theme }) => theme.spacing(200)};
    background: ${({ theme }) => theme.colors.dark};
  }
`;

export const CardHeader = styled.div`
  background: ${({ theme }) => theme.colors.grey};
`;

export const CardPoster = styled.img`
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing(3)};
  align-self: flex-start;
  border-radius: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tagBackground};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing(9)};
  text-transform: capitalize;
`;

export const CardText = styled.p`
  font-weight: 200;
  letter-spacing: 0.8;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
`;
export const UserBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  position: relative;
`;
export const UserName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Date = styled.small`
  color: ${({ theme }) => theme.colors.grey};
`;
