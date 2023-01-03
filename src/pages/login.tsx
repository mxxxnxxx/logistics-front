import React from 'react'

export async function getStaticProps() {
    return { props: { title: 'Login' } }
}

const Login: React.FC = (props) => {
    return (
        <div>
            <form action='post'>
                <input name='email' />
                <input name='password' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Login
