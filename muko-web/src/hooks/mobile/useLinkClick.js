import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobileLayoutContext, systemContext } from 'contexts';

const useLinkClick = () => {
  const { setIsClosing } = useContext(mobileLayoutContext);
  const { setAppBarTitle } = useContext(systemContext);

  const navigate = useNavigate();

  const handleLinkClick = (path, title) => {
    if (path === '/') {
      navigate('/');
      setAppBarTitle('뮤코 하우스');
      setIsClosing(true);
    } else {
      navigate(path);
      setAppBarTitle(title);
    }
  };

  return handleLinkClick;
};

export default useLinkClick;
