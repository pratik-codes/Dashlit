export const LinkClickHandler = (type: string, url: string | string[]) => {
    if (type === 'link') {
      if (typeof url === 'string') {
        window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
      }
    } else if (Array.isArray(url)) {
      url.forEach((link) => {
        window.open(link.startsWith('http') ? link : `https://${link}`, '_blank');
      });
    }
  };
  