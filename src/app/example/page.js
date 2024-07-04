// css in js

const ExamplePage = () => {

    const abc = {
        display: 'flex',
        padding: '20px',
        backgroundColor: 'aqua',
    }

    return (
        <div style={abc}>
            <h1>Hello from Example</h1>
            <h1>Hello from Example</h1>
            <h1>Hello from Example</h1>
        </div>


    )
}

export default ExamplePage;