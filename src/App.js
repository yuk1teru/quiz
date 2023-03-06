import { Typography, Box, Button } from '@mui/material';
import SelectedList from './components/SelectList/SelectedList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import data from './data';
import { useState } from 'react';
const pageWrappStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' };
const contentWrappStyle = { width: '100%', maxWidth: '440px', border: '1px solid #bdbdbd', padding: '40px', borderRadius: '10px' };

function App() {
   const [step, setStep] = useState(0);
   const [isSelect, setIsSelect] = useState(true);
   const [isCorrectVariant, setisCorrectVariant] = useState(false);
   const [total, setTotal] = useState(0);

   const endOfQuiz = data.length > step;

   const handleStep = () => {
      setStep(step + 1);
      setIsSelect(true);
   };

   const handleNextQuizButtonClick = () => {
      handleStep();
      if (isCorrectVariant) {
         setTotal(total + 1);
      }
   };

   const calculateProgress = () => {
      return Math.floor((100 / data.length) * step);
   };

   return (
      <Box sx={pageWrappStyle}>
         <Box sx={contentWrappStyle}>
            {endOfQuiz ? (
               <>
                  <Typography component="p" fontSize="2rem" lineHeight={1} sx={{ mb: '25px' }}>
                     {data[step].question}
                  </Typography>
                  <ProgressBar calculateprogress={calculateProgress()} />
                  <SelectedList options={data[step].options} corect={data[step].correct} onSelect={setIsSelect} isCorrectVariant={isCorrectVariant} setisCorrectVariant={setisCorrectVariant} />
                  <Button variant="contained" disabled={isSelect} onClick={handleNextQuizButtonClick} color="secondary" sx={{ display: 'block', mt: '20px', marginLeft: 'auto', marginRight: 0 }}>
                     {endOfQuiz ? 'Наступне питання' : 'Перейти до результату'}
                  </Button>
               </>
            ) : (
               <>{`Ви відповіли вірно на ${total} з ${data.length} питань`} </>
            )}
         </Box>
      </Box>
   );
}

export default App;
