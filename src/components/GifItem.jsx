import PropTypes from 'prop-types';

export const GifItem = ({ title, url, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
