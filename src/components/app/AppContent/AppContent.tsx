type AppContentProps = {
  children: React.ReactNode;
};

export const AppContent = ({ children }: AppContentProps) => {
  return <main className="flex-1 w-full app-padding min-w-0">{children}</main>;
};
