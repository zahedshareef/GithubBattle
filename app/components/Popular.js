const React = require('react')
const PropTypes = require('prop-types')

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Java', 'C#', 'Python', 'Swift']
    
    return (
        <ul className="languages">
        {languages.map((language) => {
            return(
                <li 
                style={language === props.selectedLanguage ? { color: '#d00b21'} : null }
                key={language} 
                onClick={props.onSelect.bind(null,language)}> 
                {language} 
                </li>
            )
        })}
    </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        })
    }
    render() {
        
        return (
            <div>
                <SelectLanguage selectedLanguage= {this.state.selectedLanguage}
                onSelect = {this.updateLanguage} />
            </div>
        )
    }
}

module.exports = Popular