import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/Auth'

interface HeaderProps {
    onOpenNewActivyModal: () => void;
    onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivyModal, onOpenNewCourseUnitModal}:HeaderProps){

    const {signOut} = useAuth();

    function handleSignOut(){
        signOut();
    }

    return(
        <Container>
            <Content>
                <h1>My Activies Space</h1>
                <div>
                    <button
                        type="button"
                        onClick={onOpenNewCourseUnitModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button
                        type="button"
                        onClick={onOpenNewActivyModal}
                    >
                        Nova Atividade
                    </button>
                    <button
                        type="button"
                        onClick={handleSignOut}
                    >
                        <FiLogOut size={20}/>
                    </button>
                </div>
            </Content>
        </Container>      
    )
}