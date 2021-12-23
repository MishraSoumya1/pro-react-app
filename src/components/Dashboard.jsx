import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'

const Dashboard = () => {
    const state = useSelector(state => state)
    const history = useHistory();
    console.log("Dashboard : ", state, useIntl())
    return (
        <div>
            Dashboard
            <button onClick={() => history.push("/")}>Go to home</button>
        </div>
    )
}

export default Dashboard;
