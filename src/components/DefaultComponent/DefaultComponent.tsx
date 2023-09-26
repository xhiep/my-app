import HeaderComponent from "../HeaderComponent/HeaderComponent";

interface IProps {
    children: React.ReactNode
}

const DefaultComponent = ({ children }: IProps) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    );
}

export default DefaultComponent;