import { ButtonGroup, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function SelectList({ options, corect, onSelect, isCorrectVariant, setisCorrectVariant }) {
   const [selectedIndex, setSelectedIndex] = useState(-1);
   useEffect(() => {
      setSelectedIndex(-1);
   }, [options]);

   return (
      <>
         <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               gap: '3px',
            }}
         >
            {options.map((option, index) => {
               return (
                  <Button
                     key={index}
                     onClick={e => {
                        onSelect(false);
                        setSelectedIndex(index);
                        if (corect === index) {
                           setisCorrectVariant(true);
                           return;
                        }
                        setisCorrectVariant(false);
                     }}
                     color={selectedIndex === index ? (isCorrectVariant ? 'success' : 'error') : 'primary'}
                     disabled={selectedIndex !== -1 && selectedIndex !== index}
                  >
                     {option}
                  </Button>
               );
            })}
            {}
         </ButtonGroup>
      </>
   );
}
