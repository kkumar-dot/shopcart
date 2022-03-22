import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-Items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            <h4 style={{ marginRight: '2rem' }} >
                Super Deal !
            </h4>
            <h4>
                Get Cashback with New Arrival Products
            </h4>
        </Container>
    )
}

export default Announcement
