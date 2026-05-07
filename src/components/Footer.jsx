export const Footer = () => {
  return (
    <footer className="py-6 mt-8 border-t border-gray-200 dark:border-gray-700
                        text-gray-500 dark:text-gray-400">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pyae Phyo Thaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
};