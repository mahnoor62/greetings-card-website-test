
// import { PaginationItem, Button, Box } from '@mui/material';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// export default function GroupedPagination({
//   totalPages,
//   currentPage,
//   onPageChange,
//   pagesPerGroup = 5,
//   group,
//   setGroup
// }) {
//   const totalGroups = Math.ceil(totalPages / pagesPerGroup);
//   const startPage = group * pagesPerGroup + 1;
//   const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

//   const handleNextGroup = () => {
//     if (group < totalGroups - 1) {
//       const nextGroup = group + 1;
//       setGroup(nextGroup);
//       onPageChange(null, nextGroup * pagesPerGroup + 1);
//     }
//   };

//   const handlePrevGroup = () => {
//     if (group > 0) {
//       const prevGroup = group - 1;
//       setGroup(prevGroup);
//       onPageChange(null, prevGroup * pagesPerGroup + 1);
//     }
//   };

//   const pageNumbers = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }

//   const sharedArrowStyles = {
//     // width:'20px',
//     minWidth: {lg: '40px', xs:'10px' },
//     height: '40px',
//     display:'flex', justifyContent:'center', alignItems:'center',
//     border: '2px solid #bd669f',
//     borderRadius: '4px',
//     fontFamily:'Calibri !important',
//     color: 'grey',
//     fontWeight: 'bold',
//     fontSize: '18px',
//     lineHeight: 1,
//     padding: 0,
//     backgroundColor: 'transparent',
//     '&:hover': {
//       color:'#bd669f'
//       // backgroundColor: '#f2f2f2'
//     },
//     '&.Mui-disabled': {
//       opacity: 0.5,
//       cursor: 'not-allowed'
//     }
//   };

//   return (
//     <Box
//       className="flex justify-center items-center gap-2 mt-4"
//       sx={{
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexWrap: 'wrap', // helpful on xs screen
//         // gap: { xs: 1, lg: 2 },
//       }}
//     >
//       {/* Prev Button */}
//       <Button
//         onClick={handlePrevGroup}
//         disabled={group === 0}
//         sx={{
//           width: { xs: '30px', lg: '30px' },
//           minWidth: { xs: '30px', lg: '30px' },
//           height: { xs: '30px', lg: '30px' },
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           border: '2px solid #bd669f',
//           borderRadius: '4px',
//           fontFamily: 'Calibri !important',
//           color: 'grey',
//           fontWeight: 'bold',
//           fontSize: { xs: '16px', lg: '18px' },
//           padding: 0,
//           backgroundColor: 'transparent',
//           '&:hover': {
//             color: '#bd669f',
//           },
//           '&.Mui-disabled': {
//             opacity: 0.5,
//             cursor: 'not-allowed',
//           },
//         }}
//       >
//         <ArrowLeftIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
//       </Button>

//       {/* Page Numbers */}
//       {pageNumbers.map((pageNum) => (
//         <PaginationItem
//           key={pageNum}
//           page={pageNum}
//           onClick={() => onPageChange(null, pageNum)}
//           selected={pageNum === currentPage}
//           sx={{
//             color: 'black',
//             borderRadius: '4px',
//             backgroundColor: 'transparent',
//             overflow: 'hidden',
//             position: 'relative',
//             width: { xs: '30px', lg: '30px' },
//             height: { xs: '30px', lg: '30px' },
//             fontSize: { xs: '14px', lg: '16px' },
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               inset: 0,
//               padding: '2px',
//               background: '#bd669f',
//               mask: 'linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)',
//               WebkitMaskComposite: 'xor',
//               maskComposite: 'exclude',
//             },
//             '&.Mui-selected': {
//               backgroundColor: '#bd669f',
//               color: 'white',
//               fontWeight: 700,
//             },
//           }}
//         />
//       ))}

//       {/* Next Button */}
//       <Button
//         onClick={handleNextGroup}
//         disabled={group === totalGroups - 1}
//         sx={{
//           width: { xs: '30px', lg: '30px' },
//           minWidth: { xs: '30px', lg: '30px' },
//           height: { xs: '30px', lg: '30px' },
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           border: '2px solid #bd669f',
//           borderRadius: '4px',
//           fontFamily: 'Calibri !important',
//           color: 'grey',
//           fontWeight: 'bold',
//           fontSize: { xs: '16px', lg: '18px' },
//           padding: 0,
//           backgroundColor: 'transparent',
//           '&:hover': {
//             color: '#bd669f',
//           },
//           '&.Mui-disabled': {
//             opacity: 0.5,
//             cursor: 'not-allowed',
//           },
//         }}
//       >
//         <ArrowRightIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
//       </Button>
//     </Box>


import { useEffect, useState } from 'react';
import { PaginationItem, Button, Box } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function GroupedPagination({
  totalPages,
  currentPage,
  onPageChange,
  pagesPerGroup = 5
}) {
  const [groupStart, setGroupStart] = useState(1);

  useEffect(() => {
    if (currentPage < groupStart) {
      setGroupStart(currentPage);
    } else if (currentPage >= groupStart + pagesPerGroup) {
      setGroupStart(currentPage - pagesPerGroup + 1);
    }
  }, [currentPage, groupStart, pagesPerGroup]);

  const pageNumbers = [];
  const endPage = Math.min(groupStart + pagesPerGroup - 1, totalPages);
  for (let i = groupStart; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const sharedButtonStyles = {
    width: { xs: '30px', lg: '30px' },
    minWidth: { xs: '30px', lg: '30px' },
    height: { xs: '30px', lg: '30px' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #bd669f',
    borderRadius: '4px',
    fontFamily: 'Calibri !important',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: { xs: '16px', lg: '18px' },
    padding: 0,
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#bd669f'
    },
    '&.Mui-disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(null, currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(null, currentPage + 1);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        // bgcolor:'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: 1,
        mt: 4,
        flexWrap: 'no-wrap'
      }}
    >
      <Button onClick={handlePrev} disabled={currentPage === 1} sx={sharedButtonStyles}>
        <ArrowLeftIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
      </Button>

      {pageNumbers.map((pageNum) => (
        <PaginationItem
          key={pageNum}
          page={pageNum}
          onClick={() => onPageChange(null, pageNum)}
          selected={pageNum === currentPage}
          sx={{
            color: '#bd669f',

            borderRadius: '4px',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            position: 'relative',
            width: { xs: '30px', lg: '30px' },
            height: { xs: '30px', lg: '30px' },
            fontSize: { xs: '14px', lg: '16px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              padding: '2px',
              background: '#bd669f',
              mask: 'linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            },
            '&.Mui-selected': {
              backgroundColor: '#bd669f',
              color: 'white',
              fontWeight: 700,
            }
          }}
        />
      ))}

      <Button onClick={handleNext} disabled={currentPage === totalPages} sx={sharedButtonStyles}>
        <ArrowRightIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
      </Button>
    </Box>
  );
}



//    import { PaginationItem, Button, Box } from '@mui/material';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// export default function GroupedPagination({
//   totalPages,
//   currentPage,
//   onPageChange,
//   pagesPerGroup = 5
// }) {
//   const half = Math.floor(pagesPerGroup / 2);

//   let startPage = currentPage - half;
//   let endPage = currentPage + half;

//   // Clamp boundaries
//   if (startPage < 1) {
//     endPage += 1 - startPage;
//     startPage = 1;
//   }
//   if (endPage > totalPages) {
//     startPage -= endPage - totalPages;
//     endPage = totalPages;
//   }
//   startPage = Math.max(startPage, 1);

//   const pageNumbers = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }

//   const sharedButtonStyles = {
//     width: { xs: '30px', lg: '30px' },
//     minWidth: { xs: '30px', lg: '30px' },
//     height: { xs: '30px', lg: '30px' },
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '2px solid #bd669f',
//     borderRadius: '4px',
//     fontFamily: 'Calibri !important',
//     color: 'grey',
//     fontWeight: 'bold',
//     fontSize: { xs: '16px', lg: '18px' },
//     padding: 0,
//     backgroundColor: 'transparent',
//     '&:hover': {
//       color: '#bd669f'
//     },
//     '&.Mui-disabled': {
//       opacity: 0.5,
//       cursor: 'not-allowed'
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: 1,
//         mt: 4,
//         flexWrap: 'wrap'
//       }}
//     >
//       <Button
//         onClick={() => onPageChange(null, currentPage - 1)}
//         disabled={currentPage === 1}
//         sx={sharedButtonStyles}
//       >
//         <ArrowLeftIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
//       </Button>

//       {pageNumbers.map((pageNum) => (
//         <PaginationItem
//           key={pageNum}
//           page={pageNum}
//           onClick={() => onPageChange(null, pageNum)}
//           selected={pageNum === currentPage}
//           sx={{
//             color: 'black',
//             borderRadius: '4px',
//             backgroundColor: 'transparent',
//             overflow: 'hidden',
//             position: 'relative',
//             width: { xs: '30px', lg: '30px' },
//             height: { xs: '30px', lg: '30px' },
//             fontSize: { xs: '14px', lg: '16px' },
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               inset: 0,
//               padding: '2px',
//               background: '#bd669f',
//               mask: 'linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)',
//               WebkitMaskComposite: 'xor',
//               maskComposite: 'exclude',
//             },
//             '&.Mui-selected': {
//               backgroundColor: '#bd669f',
//               color: 'white',
//               fontWeight: 700,
//             }
//           }}
//         />
//       ))}

//       <Button
//         onClick={() => onPageChange(null, currentPage + 1)}
//         disabled={currentPage === totalPages}
//         sx={sharedButtonStyles}
//       >
//         <ArrowRightIcon sx={{ fontSize: { xs: '22px', lg: '30px' } }} />
//       </Button>
//     </Box>
//   );
// }
