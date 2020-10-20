import React from "react"


class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "https://i.imgflip.com/1ii4oc.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    //Calling api everytime after component mounts DOM, to get meme images
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
               // console.log(response.data)
                const memes = response.data
                this.setState({
                    allMemeImages: memes
                })
            })
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick(event) {
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.memes.length)
        const rImg = this.state.allMemeImages.memes[randNum].url
        this.setState({
            imgUrl: rImg
        })
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <div className="meme-form">
                    <input type="text" name="topText" value={this.state.topText} placeholder="Top Text" onChange={this.handleChange} />
                    <br />

                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom Text" onChange={this.handleChange} />

                    <br />
                    <button onClick={this.handleClick}>Gen</button>
                    <br />
                </div>
                <div className="meme">
                    <h2 className="top">{this.state.topText}</h2>
                    <img src={this.state.imgUrl} alt="Problem?"></img>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}
export default MemeGenerator