import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("mx-auto max-w-[130rem] px-3", className)}>
      {children}
    </div>
  );
};
