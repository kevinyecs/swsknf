import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import LanguagePrompt from './LanguagePrompt';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const LanguageModel = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Language Model', path: '/language-model' }]} />
      </Box>

      <SimpleCard title="Language Model">
        <LanguagePrompt />
      </SimpleCard>
    </Container>
  );
};
export default LanguageModel;
