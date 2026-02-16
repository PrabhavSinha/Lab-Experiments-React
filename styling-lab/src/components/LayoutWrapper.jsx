// src/components/LayoutWrapper.jsx
import styles from './Card.module.css';

const LayoutWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-indigo-600">Enhanced Dashboard</h1>
      </header>
      {/* Component Composition: rendering children passed from parent */}
      <main className="space-y-4">
        {children}
      </main>
    </div>
  );
};

export default LayoutWrapper;