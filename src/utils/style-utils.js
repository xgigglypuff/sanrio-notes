// set the styles for each character
export default function getStyles(character) {
  const helloKittyStyles = {
    backgroundColor: '#fffef9',
    color: '#000000',
    accent: '#e01334',
  };

  const kuromiStyles = {
    backgroundColor: '#000000',
    color: '#fffef9',
    accent: '#f3a7c1',
  };

  const myMelodyStyles = {
    backgroundColor: '#f2b5d1',
    color: '#693e2e',
    accent: '#693e2e',
  };

  const pompompurinStyles = {
    backgroundColor: '#523330',
    color: '#ffec2f',
    accent: '#ad7f7a',
  };

  const keroppiStyles = {
    backgroundColor: '#dfe58d',
    color: '#d394aa',
    accent: '#d394aa',
  };

  switch (character) {
    case 1:
      return (helloKittyStyles);
    case 2:
      return (kuromiStyles);
    case 3:
      return (myMelodyStyles);
    case 4:
      return (pompompurinStyles);
    case 5:
      return (keroppiStyles);
    default:
      return (helloKittyStyles);
  }
}
