export const Title = ({ level, children, className }) => {
  const Tag = `h${level || 1}`;
  return <Tag className={className}>{children}</Tag>;
};