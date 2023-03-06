import { LinearProgress, Typography, Box } from '@mui/material';

export default function ProgressBar(props) {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
         <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" color="success" sx={{ height: '9px', borderRadius: '10px' }} value={props.calculateprogress} {...props} />
         </Box>
         <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(props.calculateprogress)}%`}</Typography>
         </Box>
      </Box>
   );
}
