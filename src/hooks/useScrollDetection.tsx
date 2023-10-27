import { useEffect, useState } from 'react';

const useScrollDetection = (
  scrollRef: React.RefObject<HTMLElement>,
  sections: { ref: React.RefObject<HTMLElement>; background: string; color: string; borderColor: string }[],
  initial?: { background: string; color: string; borderColor: string }
) => {
  const [activeValue, setActiveValue] = useState<{ background: string; color: string; borderColor: string }>(
    initial ? initial : { background: '', color: '', borderColor: '' }
  );
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    const currentRef = scrollRef.current;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const passedSections = sections.filter(
            (section) => section.ref.current && currentRef.scrollTop >= section.ref.current!.offsetTop
          );
          if (passedSections.length > 0) {
            const highestPassedSection = passedSections.reduce((highest, current) => {
              if (highest.ref.current && current.ref.current) {
                return highest.ref.current.offsetTop > current.ref.current.offsetTop ? highest : current;
              }
              return highest;
            }, passedSections[0]);

            setActiveValue({
              background: highestPassedSection.background,
              color: highestPassedSection.color,
              borderColor: highestPassedSection.borderColor,
            });
          } else {
            setActiveValue(initial ? initial : { background: '', color: '', borderColor: '' });
          }

          setTicking(false);
        });
        setTicking(true);
      }
    };

    currentRef && currentRef.addEventListener('scroll', handleScroll);

    return () => currentRef && currentRef.removeEventListener('scroll', handleScroll);
  }, [sections]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeValue;
};

export default useScrollDetection;
