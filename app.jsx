

function Game(props) {
    return (
        <div className="game">
            {props.title ? (<h3>{props.title}</h3>) : ""}
            <img className="image" src={`../${props.image}`}
                alt={props.title} />
            <p className="description">{props.description}</p>
            <button onClick={props.onEditGame}>Edit</button>
            <button onClick={props.onDeleteGame}>Delete</button>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.gameList = [
            { title: "Brawl Stars", image: "./images/brawlstars.jpg", description: "Fast-paced 3v3 multiplayer and battle royale made for mobile! Play with friends or solo across a variety of game modes in under three minutes.Unlock and upgrade dozens of Brawlers with powerful Super abilities, Star Powers and Gadgets! Collect unique skins to stand out and show off. Battle in a variety of mysterious locations within the Brawliverse!" },
            { title: "Fire Emblem™: Three Houses", image: "./images/fire-emblem-three-houses-switch-hero.jpg", description: "War is coming to the continent of Fódlan. Here, order is maintained by the Church of Seiros, which hosts the prestigious Officer’s Academy within its headquarters. You are invited to teach one of its three mighty houses, each comprised of students brimming with personality and represented by a royal from one of three territories. As their professor, you must lead your students in their academic lives and in turn-based, tactical RPG battles wrought with strategic, new twists to overcome. Which house, and which path, will you choose?" },
            { title: "Clash Royale", image: "./images/Clash-Royale.jpg", description: "Clash Royale is a real-time multiplayer game starring the Royales, your favourite Clash characters and much, much more. Collect and upgrade dozens of cards featuring the Clash of Clans troops, spells and defenses you know and love, as well as the Royales: Princes, Knights, Baby Dragons and more. Knock the enemy King and Princesses from their towers to defeat your opponents and win Trophies, Crowns and glory in the Arena." },
            { title: "Angry Birds Evolution 2020", image: "./images/Angry-Birds-Evolution 2020.jpg", description: "Enter Bird Island in Angry Birds Evolution – a visually stunning RPG with hundreds of new Angry Birds to collect. It’s up to you to assemble an unstoppable team of evolved super birds, battle and kick the pigs out of Bird Island." }
        ]
        this.state = {
            title: "Brawl Stars",
            image: "./images/brawlstars.jpg",
            description: "Fast-paced 3v3 multiplayer and battle royale made for mobile! Play with friends or solo across a variety of game modes in under three minutes.Unlock and upgrade dozens of Brawlers with powerful Super abilities, Star Powers and Gadgets! Collect unique skins to stand out and show off. Battle in a variety of mysterious locations within the Brawliverse!"
        }
    }

    editGame(gameTitle){
        console.log('se editeaza= ', gameTitle)
    }
    deleteGame(gameTitle) {
        console.log('sterge un game = ', gameTitle)

        //   const games = this.state.games.filter(game => game.title !== gameTitle);
        //    this.setState({
        //       games: games
        //    }) 
    }


    render() {
        return (
            <div className="ListOfGames">
                {this.gameList
                    .map(gameItem => (
                        <Game
                            title={gameItem.title}
                            image={gameItem.image}
                            description={gameItem.description}
                            onDeleteGame={()=> {
                                this.deleteGame(gameItem.title)
                            }}
                            onEditGame={()=> {
                                this.editGame(gameItem.title)
                            }}
                        />
                    ))
                }
            </div>
        )
    }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)



//   class PostList extends React.Component {
//     constructor(props) {
//       super(props);

//       // const posts = []
//       // for (let index = 0; index < this.props.numberOfPost; index++) {
//       //   const post = {
//       //     id: index,
//       //     title: 'post ' + index,
//       //     content: 'content ' + index
//       //   }
//       //   posts.push(post)
//       // }

//       this.state = {
//         posts: []
//       }
//     }

//     componentDidMount() {
//       fetch("http://localhost:3000/posts")
//         .then((response) => {
//           return response.json()
//         })
//         .then((posts) => {
//            this.setState({
//              posts: posts
//            })
//         })
//     }

//     deletePost(postId) {
//       console.log('sterge un post = ', postId)
//       // 1. Sa stergem si pe server iar daca sa sters cu succes atunci facem pasul 2

//       // 2. Stergem postul din this.state.posts - stergere locala
//       const posts = this.state.posts.filter(post => post.id !== postId);
//       this.setState({
//         posts: posts
//       }) // provoaca rerandarea componentei
//     }


//     render() {
//       // this 
//       return (
//         <div>
//           <h2>Lista posturi</h2>
//           {this.state.posts.map((postData) => {
//             return (<Post
//               title={postData.title /* = post 1 */}
//               content={postData.content}
//               onDeletePost={() => {
//                 this.deletePost(postData.id)
//               }}
//             />
//             )
//           })}
//         </div>
//       )
//     }
//   }

