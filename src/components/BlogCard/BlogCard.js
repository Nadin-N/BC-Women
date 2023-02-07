import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  Tag,
  CardTitle,
  CardText,
  CardFooter,
  UserBox,
  Avatar,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export function BlogCard({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName} />

          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{postedAt}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
}
