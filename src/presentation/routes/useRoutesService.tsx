import { Board } from '../pages/Board/Board';

const useRoutesService = () => {
    const routes = [
        {
            path: '/',
            element: <Board />,
        },
        {
            path: '/board',
            element: <Board />,
        },
    ];

    return routes;
};

export default useRoutesService;
