import React from 'react';
import { skeleton } from '../../utils';
import { SanitizedAboutMe } from '../../interfaces/sanitized-config';

interface AboutMeCardProps {
  loading: boolean;
  aboutMe: SanitizedAboutMe;
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ loading, aboutMe }) => {
  const renderSkeleton = () => (
    <div className="card shadow-lg compact bg-base-100 shadow-lg bg-opacity-40 w-full">
        <div className="card-body p-8">
          <h5 className="card-title">
            {skeleton({
              widthCls: 'w-full',
              heightCls: 'h-8',
            })}
          </h5>
          <div className="mb-3">
            {skeleton({
              widthCls: 'w-full',
              heightCls: 'h-4',
              className: 'mx-auto',
            })}
          </div>
        </div>
      </div>
  );

  const renderAboutMe = () => (
    <div className="card shadow-lg compact bg-base-100 shadow-lg bg-opacity-40 w-full">
        <div className="card-body p-8">
          <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        About Me
                      </span>
                    )}
                  </h5>
          <p className="text-base-content text-opacity-60">
            {aboutMe.description}
          </p>
        </div>
      </div>
  );

  return (
    <div>
      {loading ? renderSkeleton() : renderAboutMe()}
    </div>
  );
};

export default AboutMeCard;
