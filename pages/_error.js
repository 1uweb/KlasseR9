import React from 'react'
import css from '../static/style/css/main.sass'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <div className="error-root">
        <h1>{this.props.statusCode}</h1>
        <p>Es gab einen Fehler beim Rendern!</p>
      </div>
    )
  }
}
