// Features.jsx
import "./Features.css"
import { FiDownloadCloud, FiUser, FiRefreshCw, FiLayout } from "react-icons/fi"

const features = [
  { icon: <FiDownloadCloud />, label: "FREE STORAGE" },
  { icon: <FiUser />,          label: "USER MORE"    },
  { icon: <FiRefreshCw />,     label: "REPLY READY"  },
  { icon: <FiLayout />,        label: "EASY LAYOUT"  },
]

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-label">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features