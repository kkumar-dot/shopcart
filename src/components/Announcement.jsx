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

const H4 = styled.h4`
    margin-right: 20px;
`

const H = styled.h4`
`

const Announcement = () => {
    return (
        <Container>
            <H4>
                Super Deal !
            </H4>
            <H>
                Get Cashback with New Arrival Products
            </H>
        </Container>
    )
}

export default Announcement
