import Loadable from 'react-loadable';
import path from 'path';
import { Loader } from '../../modules/Common/components/Loader';
import { fakeDelay } from '../../utilities';

export const HomePage = Loadable({
  loader: () => fakeDelay(100).then(() => import(/* webpackChunkName: "HomePage" */ '../../modules/HomePage/containers/HomePage')),
  loading: Loader,
  serverSideRequirePath: path.resolve(__dirname, '../../modules/HomePage/containers/HomePage')
});