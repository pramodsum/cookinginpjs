import styled from '@emotion/styled';

const Content = styled.section({
  overflowWrap: 'break-word',
  fontSize: '1.2rem',
  '& figure': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '@media screen and (max-width: 960px)': {
      marginStart: 0,
      WebkitMarginStart: 0,
      marginEnd: 0,
      WebkitMarginEnd: 0,
    },

    '& figcaption': {
      fontSize: '1rem',
      color: 'gray',
    },

    '& iframe': {
      width: '100%'
    }
  },
  '& img': {
    width: '100%',
    height: '100%',
  },
  // Blockquote
  '& blockquote': {
    display: 'block',
    borderWidth: '2px 0',
    borderStyle: 'solid',
    borderColor: 'rgb(255,236,150, .75)',
    padding: '1.5em 0',
    margin: '2em 0',
    position: 'relative',
    textAlign: 'center',
  },
  '& blockquote:before': {
    content: 'open-quote',
    position: 'absolute',
    top: '0em',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '3rem',
    height: '2rem',
    font: '6em/1.08em "PT Sans", sans-serif',
    color: '#666',
    textAlign: 'center',
  },
  '& blockquote.instagram-media:before': {
    content: 'none',
  },

  '& grid': {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(2,1fr)',
    '& imgtitle': {
      fontWeight: 'bold',
    },
    '& img': {
      height: 'auto',
    },
  },

  '& ingredients': {
    display: 'grid',
    gridColumnGap: '5px',
    gridTemplateColumns: 'repeat(1,1fr)',
    '& header': {
      fontWeight: 'bold',
    },
    '& row': {
      display: 'flex',
      justifyContent: 'space-between',
      '&:first-child': {
        borderBottom: '1px dashed gray',
        marginBottom: '10px',
      },

      '& div:last-child': {
        marginLeft: '5px',
        minWidth: '110px',
        textAlign: 'right'
      },
    },
  },
});

export default Content;
