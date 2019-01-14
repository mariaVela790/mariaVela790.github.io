import React, {Component} from 'react'
import logoStyles from './logo.module.css'
import {AppRegistry, View} from 'react-native'
import {Container, Row, Col} from 'reactstrap'

export default class CenterLogo extends Component {
    render () {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col className="pb-0" xs="3">
                        <div className={logoStyles.logo}>
                            <View style={{
                                flex: 1,
                                justifyContent: `center`
                            }} className="mt-4 ml-2 p-1 justify-content-center">
                                <span className="logo-font text-white">mV</span>
                            </View>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}