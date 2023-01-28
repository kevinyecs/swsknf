import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const LanguageModel = Loadable(lazy(() => import('./llm/Turing')));

const hiveRoutes = [
  {
    path: '/models/llm/turing',
    element: <LanguageModel />,
  },
];

export default hiveRoutes;
