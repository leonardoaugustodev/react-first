import React, { Component } from "react";
import Post from "../Post/Post";
import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://img.icons8.com/bubbles/50/000000/business-man-with-beard.png"
            },
            content: `A Rocketseat está sempre em busca de
            novos membros para o time, e geralmente ficamos de olho em quem se
            destaca no Bootcamp, inclusive 80% do nosso time de devs é composto
            por alunos do Bootcamp. Além disso, se você tem vontade de ensinar
            gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me
            chamem mesmo, esse comentário é real)`
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6.png"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?\n\nEstou fazendo o Bootcampo GoStack da RocketSeat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmo uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "https://img.icons8.com/bubbles/50/000000/business-man-with-beard.png"
            },
            content: `Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construida!`
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar:
                "https://img.icons8.com/bubbles/50/000000/business-man-with-beard.png"
            },
            content: `Qee maaaasa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os dev sam de lá com super poderes!!`
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="main-card">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
