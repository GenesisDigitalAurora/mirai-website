import { useRef, useEffect } from 'react';

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Asegurar reproducción automática cuando el componente se monta
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Error al reproducir video:', error);
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[50vh] md:h-[80vh]">
      {/* Video Container */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            minWidth: '100%'
          }}
          autoPlay
          muted
          playsInline
          controls={false}
          preload="auto"
          onLoadedData={() => {
            console.log('Video cargado exitosamente');
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          }}
          onCanPlay={() => {
            console.log('Video listo para reproducir');
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          }}
          onError={(e) => {
            console.error('Error al cargar video:', e);
          }}
          onPlay={() => {
            console.log('Video reproduciéndose');
          }}
        >
          <source src="/Mirai_video_v2.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </div>
  );
}