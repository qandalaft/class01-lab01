import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <div >
                <h2>horned animals</h2>
                <div>
                    <img src="https://media.sciencephoto.com/image/c0289476/800wm/C0289476-Mythical_horned_beasts,_17th_century.jpg" alt="horn1" title="horn horse" {...this.props.title} ></img>
                </div>
                <div name="red">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ce6d9e6-7696-4d96-b1b2-c05af8586186/d81md66-5217749d-b568-4270-b10a-f9e790219978.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjZTZkOWU2LTc2OTYtNGQ5Ni1iMWIyLWMwNWFmODU4NjE4NlwvZDgxbWQ2Ni01MjE3NzQ5ZC1iNTY4LTQyNzAtYjEwYS1mOWU3OTAyMTk5NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nZMCMmfdH_W4avRO7Isc9-ZrG37sIns8o1L5E4s2qfE" alt="red horn" title="red horned beast" {...this.props.title}></img>
                </div>
                <p>The kind of the red titan tribe.Highly intelligent and respectful to any who wish to stay on his good side.
                    Not very talkative but will speak if necessary.
                    Stands at 8.09ft
                    Weighs over 300bl
                    Given name is Montah</p>

            </div>
        )
    }
}

export default HornedBeasts
