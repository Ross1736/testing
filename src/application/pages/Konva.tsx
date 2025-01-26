import { useState, useEffect } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";

// Definimos el tipo para el rectángulo personalizado
interface CustomRectangle {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  cornerRadius: number;
  stroke: string;
  strokeWidth: number;
  shadowBlur: number;
  isDragging: boolean;
}

// Función para crear un rectángulo personalizado
function createCustomRectangle(): CustomRectangle {
  return {
    id: Math.random().toString(36).substring(7),
    x: 150,
    y: 150,
    width: 200,
    height: 75,
    fill: "linear-gradient(45deg, #89b717, #2a9d8f)",
    cornerRadius: 20,
    stroke: "#264653",
    strokeWidth: 5,
    shadowBlur: 10,
    isDragging: false,
  };
}

const INITIAL_RECTANGLE = createCustomRectangle();

function Konva(): JSX.Element {
  const [rectangle, setRectangle] =
    useState<CustomRectangle>(INITIAL_RECTANGLE);
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Escuchar el evento de cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setStageSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Maneja el inicio del arrastre
  const handleDragStart = () => {
    setRectangle({
      ...rectangle,
      isDragging: true,
    });
  };

  // Maneja el final del arrastre
  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    setRectangle({
      ...rectangle,
      isDragging: false,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  return (
    <Stage
      width={stageSize.width}
      height={stageSize.height}
      style={{ overflow: "hidden" }}
    >
      <Layer>
        <Text text="Drag the custom rectangle" fontSize={20} padding={10} />

        <Rect
          key={rectangle.id}
          id={rectangle.id}
          x={rectangle.x}
          y={rectangle.y}
          width={rectangle.width}
          height={rectangle.height}
          fill={rectangle.fill}
          cornerRadius={rectangle.cornerRadius}
          stroke={rectangle.stroke}
          strokeWidth={rectangle.strokeWidth}
          shadowColor="black"
          shadowBlur={rectangle.shadowBlur}
          shadowOpacity={0.6}
          shadowOffsetX={rectangle.isDragging ? 10 : 5}
          shadowOffsetY={rectangle.isDragging ? 10 : 5}
          scaleX={rectangle.isDragging ? 1.1 : 1}
          scaleY={rectangle.isDragging ? 1.1 : 1}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </Layer>
    </Stage>
  );
}

export default Konva;
