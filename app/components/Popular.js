const React = require('react')

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        })
    }
    render() {
        var languages = ['All', 'JavaScript', 'Java', 'C#', 'Python', 'Swift']
        return (
            <ul className="languages">
                {languages.map(function(language) {
                    return(
                        <li key={language} onClick={this.updateLanguage}> {language} </li>
                    )
                }, this)}
            </ul>
        )
    }
}

module.exports = Popular