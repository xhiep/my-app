import { Row, Col, Input } from "antd";
import { WrapperHeader, WrapperText } from "./style";
import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { UserOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    const { Search } = Input;

    return (
        <header>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperText>web</WrapperText>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={(value: string) => console.log(value)}
                    />
                </Col>
                <Col span={6}>
                    <UserOutlined />
                </Col>
            </WrapperHeader>
        </header>
    );
}

export default HeaderComponent;