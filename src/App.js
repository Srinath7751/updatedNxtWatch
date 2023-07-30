import {Component} from 'react'
import TabItem from './components/TabItem'
import Greeting from './components/Greeting'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    const filteredList = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(each => (
            <TabItem
              key={each.id}
              details={each}
              clickTabItem={this.clickTabItem}
              isActive={each.id === activeTabId}
            />
          ))}
        </ul>
        {filteredList.map(each => (
          <Greeting key={each.id} details={each} />
        ))}
      </div>
    )
  }
}

export default App
