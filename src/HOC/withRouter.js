import React from 'react';
import { merge } from 'ramda';
import { useRouter } from 'next/router'

const withRouter = (Component) => {
    return (props) => {
        const { query } = useRouter()
        return (<Component {...merge(props, { query })} />)
    }
}  

export default withRouter