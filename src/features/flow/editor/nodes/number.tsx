import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ReactShapeConfig } from "@antv/x6-react-shape"
import { Hash } from "@phosphor-icons/react"
import { NodeActions, NodeContainer, NodeContent, NodeHeader } from "./layout"
import { NodeProps } from "./typings"

// eslint-disable-next-line react-refresh/only-export-components
function NumberInput({ node }: NodeProps) {
  const [value, setValue] = useState(0)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(e.target.value))
  }

  function onDelete() {
    node.remove()
  }

  return (
    <NodeContainer>
      <NodeActions onDelete={onDelete} />
      <NodeHeader>
        <div className="flex items-center gap-2">
          <Hash />
          <span>数值</span>
        </div>
      </NodeHeader>
      <Separator />
      <NodeContent className="px-2">
        <Input type="number" placeholder="请输入数字" value={value} onChange={onChange} />
      </NodeContent>
    </NodeContainer>
  )
}

export default {
  shape: "number",
  width: 200,
  effect: ["data"],
  component: NumberInput,
  ports: {
    groups: {
      output: {
        position: "right",
        attrs: {
          circle: {
            magnet: true,
            fill: "#000",
            stroke: "none",
            r: 5,
          },
        },
      },
    },
    items: [
      {
        group: "output",
        args: {
          dy: 45,
        },
      },
    ],
  },
} as ReactShapeConfig
