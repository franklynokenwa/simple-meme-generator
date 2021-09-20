import React from 'react';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeImage = this.changeImage.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => { this.setState({
            allMemeImgs : data
            })
        
        })
    }
    
    handleChange(event){
        const {name, value} = event.target;
        console.log(name);
        this.setState({
            [name]: value
        })
    }
    changeImage(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.data.memes.length)
        const randMemeImg = this.state.allMemeImgs.data.memes[randNum].url
        this.setState({
            randomImage: randMemeImg
        })           
        
    }

    render(){
        return (
            <div>
                <form className="meme-form">
                    <input 
                        placeholder="Enter text" 
                        type="text" name="topText" 
                        value={this.state.topText} 
                        onChange= {this.handleChange}
                    />
                    <input 
                        placeholder="Enter text" 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange= {this.handleChange} 
                    />

                    <button onClick={this.changeImage}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>            
        )
    }
}

export default MemeGenerator;