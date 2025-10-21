import { UserSearch } from '@/components/UserSearch';

export const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="pt-5 fw-bold fs-1 fs-md-2">
                Github Software
            </h1>
            <h3 className="py-3 fs-5 fs-md-4">
                Buscador de Usuários no Github
            </h3>
            <UserSearch />
        </div>

    );
};
