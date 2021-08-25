import { useEffect } from "react";
import { Tooltip } from "antd";
import style from "./index.module.sass";

export default function MapSvg() {
  //   useEffect(() => {
  //     let item = document.getElementById("Path_48");
  //     item.addEventListener("mouseover", sectorDetails);
  //     function sectorDetails() {
  //       //   console.log("hello");
  //       return (
  //         // <div style={{ marginLeft: buttonWidth, whiteSpace: "nowrap" }}>
  //         // <Tooltip placement="top" color="red" title="hello world">
  //         //   <Button>Top</Button>
  //         // </Tooltip>
  //         // </div>
  //       );
  //     }
  //   }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="591"
      height="637"
      viewBox="0 0 591 637"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Path_1124"
            fill="#0d3c47"
            d="M0 0h591v637H0z"
            transform="translate(775 1787)"
          />
        </clipPath>
      </defs>
      <g
        id="Map-component"
        clipPath="url(#clip-path)"
        transform="translate(-775 -1787)"
      >
        <g id="Group_88" transform="translate(783 2340)">
          <path
            id="Path_42"
            d="M203.137 73.731c-6.3-16.478-12.71-32.915-18.906-49.433-1.077-2.87-1.939-5.816-2.909-8.724-.485-1.454-.37-3.278-1.454-4.362a26.408 26.408 0 0 1-2.909-2.912c-2.409-3.312-9.49-13.183-11.634-18.9-.7-1.871-.88-3.9-1.454-5.816-.881-2.936-2.909-8.724-2.909-8.724-.513-5.127-1.1-15.786-2.909-21.809a61.885 61.885 0 0 0-2.909-7.27 47.146 47.146 0 0 0-5.817-10.177c-2.23-3.122-5.313-6.75-7.272-10.177a56.947 56.947 0 0 1-2.909-5.816c-.6-1.409-.563-3.115-1.454-4.362-5.964-8.347-4.991-2.709-8.726-10.178a32.546 32.546 0 0 1-1.454-4.362c1.436-37.322-8.361-30.806 8.726-43.618 1.4-1.048 2.909-1.938 4.363-2.908 8.953-13.426-2.472 3.09 5.817-7.27 1.092-1.364 1.566-3.243 2.909-4.362 3.967-3.3 7.068-2.84 11.634-4.362 8.414-2.8 7.916-3.337 16-8.724 8.336-12.5-1.658 3.315 4.363-8.724a42.284 42.284 0 0 1 2.909-4.362 32.549 32.549 0 0 1 1.454-4.362c.782-1.563 2.395-2.692 2.909-4.362 1.454-4.724 1.345-9.85 2.909-14.539 2.384-7.149 2.393-8.549 5.817-14.539 1.2-2.094 3.612-5.8 5.817-7.27a52.5 52.5 0 0 1 5.817-2.908c.97-1.454 2.041-2.845 2.909-4.362 1.076-1.882 1.706-4.012 2.909-5.816a21.027 21.027 0 0 1 2.909-2.908c2.755-8.263.37-3.278 10.18-13.085.969-1.938 1.793-3.957 2.909-5.816 1.8-3 3.878-5.816 5.817-8.724l2.908-4.362 5.817-17.447c.485-1.454.6-3.087 1.454-4.362a42.316 42.316 0 0 0 2.909-4.362c3.776-7.55-1.318-1.59 4.363-7.27 3.559-10.674.741-6.556 7.271-13.085.97-2.908 2.165-5.75 2.909-8.724.485-1.939.88-3.9 1.454-5.816.881-2.936 1.939-5.816 2.909-8.723l1.454-4.362c.969-6.785.741-13.853 2.909-20.355a66 66 0 0 0 2.909-10.177c1.9-9.52.657-6.66 2.909-14.539a24.908 24.908 0 0 1 1.454-4.362 42.282 42.282 0 0 1 2.908-4.362c.466-1.863 1.866-8.092 2.909-10.178a42.287 42.287 0 0 1 2.909-4.362c.969-6.785.741-13.853 2.908-20.355.485-1.454 1.051-2.883 1.454-4.362 1.052-3.856 1.644-7.84 2.909-11.631.97-2.908 2.165-5.75 2.909-8.724.97-3.877 1.644-7.84 2.909-11.631a32.546 32.546 0 0 1 1.454-4.362 42.284 42.284 0 0 1 2.909-4.362c4.386-21.926-1.2 5.394 2.909-13.085.536-2.412.855-4.872 1.454-7.27.372-1.487 1.033-2.888 1.454-4.362.549-1.921.905-3.894 1.454-5.816.421-1.474 1.082-2.875 1.454-4.362.6-2.4.855-4.872 1.454-7.269.372-1.487 1.082-2.875 1.454-4.362.6-2.4.855-4.872 1.454-7.27.779-3.116 1.362-5.555 4.363-7.27 2.267-1.295 4.662-2.845 7.272-2.908 58.157-1.4 116.344-.969 174.516-1.454 1.939.485 5.384-.5 5.817 1.454 2.488 11.2-1.329 11.1-7.272 13.085-1.865 5.593-2.71 5.86 0 13.085.482 1.284 2.052 1.837 2.909 2.908 3.222 4.026 2.827 4.117 4.363 8.724-.485 11.631-.625 23.282-1.454 34.894-.142 1.993-1.3 3.823-1.454 5.816-.819 10.642-.694 21.34-1.454 31.986-.21 2.94-1.037 5.805-1.454 8.723-.553 3.868-1.065 7.744-1.454 11.631-.581 5.807-1.131 11.62-1.454 17.447-2.365 42.569.66 22.213-2.909 43.617.485 3.393.782 6.817 1.454 10.177.3 1.5 1.372 2.831 1.454 4.362.89 16.461.97 32.955 1.454 49.433-4.852 19.405 1.2 16.071-13.089 20.355-1.914.574-3.878.969-5.817 1.454-2.411 3.616-4.236 5.961-5.817 10.177-.7 1.871-.56 4.028-1.454 5.816-.613 1.226-2.031 1.855-2.909 2.908-1.552 1.862-2.539 4.22-4.363 5.816-2.127 1.861-4.971 2.719-7.272 4.362a25.064 25.064 0 0 0-2.909 2.908c-.485 1.454-1.454 2.829-1.454 4.362 0 27.483-1.539 21.555 2.909 34.894-.485 11.631-.68 23.278-1.454 34.894a39.524 39.524 0 0 1-1.454 8.724c-.623 2.076-1.939 3.877-2.909 5.816-.485 16.962-.647 33.937-1.454 50.887-.163 3.423-1.454 6.751-1.454 10.177 0 7.8 2.5 15.817 4.363 23.263.813 3.251 2.947 12.416 4.363 14.539l2.909 4.362c3.541 10.619 2.165 5.75 4.363 14.539-.969 8.724-.626 17.7-2.908 26.171-1.194 4.43-7.277 11.649-7.277 11.649-.969 3.877-1.644 7.84-2.909 11.631l-2.909 8.724c-.485 1.454-1.083 2.875-1.454 4.362a37.693 37.693 0 0 1-1.454 5.816c-.689 1.606-2.041 2.845-2.909 4.362-7.381 12.913 1.269-.45-5.817 10.177-3.847 15.384 1.376-2.732-4.363 10.177a53.233 53.233 0 0 0-2.909 8.724c-.485 1.939.542 5.71-1.454 5.816-45.022 2.394-90.168.861-135.25 1.454l-85.8 1.454c-2.909.969-5.679 2.569-8.726 2.908-1.524.169-3.968.027-4.363-1.454-5.558-20.838 5.64-20.355-2.908-20.355"
            className="cls-3"
            transform="translate(18.833 1.794)"
          />
          <path
            id="Path_43"
            d="M521.563-547.495c-9.192-.483-18.372-1.451-27.577-1.451-9.9 0-12.5.948-20.32 2.9-.484 4.835-.712 9.7-1.451 14.505-.233 1.511-1.451 2.823-1.451 4.352 0 4.424 1.757 7.6 2.9 11.6.548 1.917.968 3.868 1.451 5.8-.484 31.912-.589 63.831-1.451 95.735a63.727 63.727 0 0 1-1.451 11.6c-.641 2.99-2.161 5.736-2.9 8.7l-1.451 5.8c-3.092 46.355-2.449 27.566 0 105.889.3 9.462-.142 7.641 5.806 11.6.968 2.9 3.073 5.65 2.9 8.7-2.364 42.523 1.452 15.229-2.9 30.461-.548 1.917-.666 3.97-1.451 5.8a28.788 28.788 0 0 1-2.9 4.352c.484 16.439 1.451 32.872 1.451 49.318 0 30.2 5.321 28.529-4.354 42.066-1.406 1.967-2.419 4.352-4.354 5.8-2.084 1.562-4.838 1.934-7.257 2.9a31 31 0 0 1-2.9-4.352 89.369 89.369 0 0 1-2.9-8.7c-1.935.967-3.971 1.755-5.805 2.9-4.6 2.873-5.4 3.943-8.708 7.253-.856 8.558-2.8 16.273 0 24.659.433 1.3 1.834 2.047 2.9 2.9a24.917 24.917 0 0 0 4.354 2.9c5.764 2.88 3.361-.4 8.708 4.352 3.068 2.726 8.708 8.7 8.708 8.7.484 1.934 1.451 3.809 1.451 5.8a116.878 116.878 0 0 1-1.451 20.308c-.3 1.717-1.754 3.04-2.9 4.352-5.943 6.788-5.709 6.221-11.611 10.154-.484 1.451-.5 3.158-1.451 4.352-1.09 1.361-3.43 1.423-4.354 2.9-1.622 2.593-2.9 8.7-2.9 8.7-1.783 21.38-.039 11.758-4.354 29.011l-2.9 11.6c-.484 1.451-.6 3.079-1.451 4.352-1.139 1.707-2.9 2.9-4.354 4.352-4.876 14.618 2.562-8.052-2.9 10.154-.879 2.929-1.935 5.8-2.9 8.7a36.993 36.993 0 0 0-1.451 4.352c-.4 2.009-1.508 9.1-2.9 11.6-1.694 3.048-3.871 5.8-5.806 8.7L404 73.333c15.944 2.656 2.21 1.122 24.674 0 14.021-.7 28.056-1.117 42.091-1.451l79.827-1.451c33.482-3.042 4.563-.733 62.41-2.9 67.062-2.513 49.227-1.442 89.987-4.352 1.719-12.024 1.708-10.93 2.9-24.659.547-6.281.9-12.576 1.451-18.857.421-4.841 1.128-9.657 1.451-14.505 3.924-58.82-.034-33.161 4.354-59.472.484-22.242.842-44.486 1.451-66.725.4-14.707 1.641-48.252 2.9-65.274.324-4.366.968-8.7 1.451-13.055-.484-58.5-.544-117.015-1.451-175.514-.06-3.9-1.063-7.725-1.451-11.6-.58-5.793-.771-11.624-1.451-17.406-.288-2.449-1.01-4.827-1.451-7.253-.527-2.894-.968-5.8-1.451-8.7-.484-35.3-.667-70.6-1.452-105.889-.318-14.315 1.991-24.25-7.257-34.813-1.007-1.151-2.9-.967-4.354-1.451-18.8.751-31.164.225-47.9 2.9-8.247 1.319-16.326 4.091-24.674 4.352l-92.889 2.9a55.094 55.094 0 0 1-10.16 8.7c-2.311 1.617-4.865 2.857-7.257 4.352-1.479.924-2.794 2.121-4.354 2.9a30.528 30.528 0 0 1-4.354 1.451"
            className="cls-3"
            transform="translate(60.384 0)"
          />
          <path
            id="Path_44"
            d="M209.2 21.06c-1.453-6.313-2.791-12.654-4.358-18.94-.371-1.49-1.032-2.894-1.453-4.371-1.448-5.084-1.134-7.129-4.358-11.656a37.608 37.608 0 0 0-4.358-4.371c-.484-1.943-.879-3.91-1.453-5.828-.88-2.942-2.3-5.73-2.906-8.742-.576-2.887-1.88-10.026-2.906-13.113-.825-2.481-2.081-4.8-2.905-7.285-.631-1.9-.9-3.9-1.453-5.828-.421-1.477-1.081-2.881-1.453-4.371-.6-2.4-.348-5.07-1.453-7.285-.919-1.843-2.906-2.914-4.358-4.371-.969-2.914-2.163-5.762-2.906-8.742-.465-1.867-1.863-8.108-2.906-10.2a42.4 42.4 0 0 0-2.906-4.371l-2.906-8.742c-1.009-3.037-2.364-7.8-4.358-10.2-1.118-1.345-3.017-1.793-4.358-2.914-1.578-1.319-2.906-2.914-4.358-4.371a21.346 21.346 0 0 0-1.453-4.371c-.7-1.178-2.05-1.841-2.906-2.914-1.091-1.367-1.937-2.914-2.905-4.371-.484-1.943-1.02-3.873-1.453-5.828-.536-2.417-.854-4.882-1.453-7.285-.371-1.49-1.081-2.881-1.453-4.371-.6-2.4-.917-4.867-1.453-7.285-.433-1.955-1.02-3.873-1.453-5.828-3.69-16.651.638 1.1-2.906-13.113a58.625 58.625 0 0 1-5.811 4.371c-1.33.762-2.951.852-4.358 1.457-1.991.856-3.874 1.943-5.811 2.914-1.453 1.457-3.043 2.788-4.358 4.371-1.118 1.345-1.564 3.25-2.906 4.371-1.664 1.39-3.821 2.058-5.811 2.914-5.533 2.378-9.287 2.075-15.981 2.914-9.351 3.126.447.168-15.981 2.914-1.97.329-3.842 1.128-5.811 1.457-3.851.644-7.763.862-11.622 1.457-2.441.377-4.835 1.014-7.264 1.457-2.9.529-5.811.971-8.717 1.457a42.393 42.393 0 0 0-2.906 4.371 44.24 44.24 0 0 0-1.453 4.371c-.916 2.449-2.014 4.827-2.906 7.285-1.047 2.887-1.937 5.828-2.906 8.742l-1.451 4.376c-.484 14.084-.253 28.211-1.453 42.252a18.857 18.857 0 0 1-2.906 8.742l-2.906 4.371a32.687 32.687 0 0 1-1.453 4.371c-.781 1.566-2.257 2.745-2.906 4.371-1.309 3.283-1.893 6.812-2.906 10.2-.44 1.471-.969 2.914-1.453 4.371-1.066 7.48-1.312 10.559-2.906 17.483-.9 3.9-2.249 7.705-2.906 11.656C2.964 6.137 5.8-9.464 2.906 3.576-.783 20.223 3.543 2.476 0 16.689c2.906.971 5.657 2.78 8.717 2.914 17.387.758 18.95-.016 30.509-2.914 8.717.486 17.488.371 26.15 1.457 3.039.381 5.811 1.943 8.717 2.914 1.453.486 2.828 1.4 4.358 1.457l37.773 1.457a63.058 63.058 0 0 0 7.264 1.457c28.24 2.266 28.89 1.638 56.659 0 22.466-1.325 15.341 1.778 24.7-2.914"
            className="cls-3"
            transform="translate(0 57.096)"
          />
          <path
            id="Path_45"
            d="M485.708-487.589c-9.207-.484-18.494-.15-27.621-1.453-3.223-.46-3.333-5.553-4.361-7.266-5.166-8.607-2.688 6.471-8.723-11.626-.973-2.919-2.625-10.422-5.815-13.079-2.847-2.372-8.1-3.7-11.63-4.36-5.794-1.086-17.445-2.907-17.445-2.907-1.938-.969-3.957-1.792-5.815-2.907-3-1.8-8.723-5.813-8.723-5.813-6.784.484-13.78-.3-20.352 1.453-1.481.395-.534 3.134-1.454 4.36-2.056 2.74-5.368 4.416-7.269 7.266-7.188 10.778 1.089-1.016-5.815 7.266-1.551 1.861-2.5 4.262-4.361 5.813-1.177.981-2.907.969-4.361 1.453-8.332 12.494 1.657-3.314-4.361 8.72-5.636 11.269-.707-2.239-4.361 8.719-.485 6.782-.272 13.65-1.454 20.346-.3 1.72-2.2 2.764-2.907 4.36-1.245 2.8-1.938 5.813-2.908 8.719l-1.454 4.36-1.454 4.36c-.969 5.813-.271 12.168-2.907 17.439-1.563 3.124-8.722 5.813-8.722 5.813-5.776 17.323-3.693 7.558-1.454 37.785.233 3.144 1.013 10.745 2.908 14.533a42.223 42.223 0 0 0 2.907 4.36c.932 13.045 1.07 20.03 2.907 31.972.216 1.4 1.627 9.492 2.908 11.626a17.012 17.012 0 0 0 2.908 2.907 37.691 37.691 0 0 1-1.454 5.813c-1.375 3.208-3.47 4.922-5.815 7.266.485 5.329-.534 11.018 1.454 15.986.569 1.422 3.047-.665 4.361-1.453 1.175-.7 1.732-2.2 2.907-2.907a17.732 17.732 0 0 1 4.361-1.453c12.778-3.649-.28.578 10.176-2.906 6.3.484 12.7.215 18.9 1.453 1.344.269 1.732 2.2 2.907 2.906a21.256 21.256 0 0 0 4.361 1.453c2.417 2.416 4.348 3.967 5.815 7.266a89.549 89.549 0 0 1 2.908 8.72c-7.085 10.624 1.668-.569-7.269 5.813-2.231 1.593-3.734 4.03-5.815 5.813a21.527 21.527 0 0 1-4.361 2.907c-2.086 1.042-8.313 2.441-10.176 2.907-1.454.969-3.435 1.425-4.361 2.907-1.624 2.6-1.938 5.813-2.907 8.719-.485 1.453-.6 3.085-1.454 4.36-.969 1.453-1.426 3.434-2.907 4.36-2.6 1.624-6.172 1.207-8.722 2.907-8.352 5.566-3.126 1.672-14.537 13.079l-2.908 2.907c-1.454 1.453-3.221 2.65-4.361 4.36l-2.908 4.36c-.969 2.907-2.689 5.664-2.907 8.719-.484 6.782.2 13.749-1.454 20.346-.847 3.389-4.71 5.406-5.815 8.72l-2.908 8.72c-.485 1.453-.6 3.085-1.454 4.36l-2.907 4.36c-.485 1.453-.6 3.085-1.454 4.36-7.26 10.886-2.358-1.647-5.815 8.72.466 1.863 1.865 8.088 2.907 10.173a12.4 12.4 0 0 0 2.907 4.36c1.49 1.192 11.268 2.834 11.63 2.907 5.815-.485 11.655-.73 17.445-1.453 2.921-.365 7.28-1.941 10.176-2.906a31.069 31.069 0 0 1 4.361-2.907c9.3-4.133 7.139-1.946 15.991-4.36 20.232-5.516-5.265-1.974 30.528-4.36 10.274-2.054 4.925-.672 15.991-4.36l4.361-1.453c.484-1.453.534-3.134 1.454-4.36 4.252-5.668 6.586-6.811 11.63-10.173a21.245 21.245 0 0 1 1.454-4.36c.705-1.175 2.051-1.837 2.907-2.907 7.335-9.165-1.2-.249 5.815-7.266a21.233 21.233 0 0 1 1.454-4.36c.705-1.175 2.294-1.681 2.907-2.907.684-1.368 2.754-12.315 2.907-13.079.018-.266 2.5-38.679 2.907-40.691.269-1.343 1.938-1.938 2.907-2.906.485-1.453.5-3.164 1.454-4.36 1.7-2.124 8.337-4.587 10.176-5.813 3.869-2.578 6-8.9 8.722-11.626l2.909-2.911c3.172-9.512-1.233-.176 5.815-5.813 1.364-1.091 1.938-2.906 2.907-4.36a32.554 32.554 0 0 1 1.454-4.36c.781-1.562 2.219-2.754 2.907-4.36a37.668 37.668 0 0 0 1.454-5.813c-1.6-159.857-1.454-96.881-1.454-188.923"
            className="cls-4"
            transform="translate(43.046 3.737)"
          />
          <path
            id="Path_46"
            d="M139.631-126.926c6.073-3.857 22.458-16.246 33.521-24.59 4.875-3.677 1.631-2.844 5.83-8.679a37.517 37.517 0 0 1 4.372-4.339c3.349-9.973.742-6.523 5.83-11.572 4.184-16.61-1.666 3.859 4.372-10.125.789-1.827.668-3.959 1.457-5.786.69-1.6 2.046-2.83 2.915-4.339 4.706-8.173.634-3.523 5.83-8.679 2.371-7.059 3.094-11.749 8.744-17.357 8.526-8.462 5.382-4.4 10.2-11.572-.486-1.446-.5-3.149-1.457-4.339-1.094-1.358-3-1.807-4.372-2.893a16.367 16.367 0 0 1-2.915-2.893c-2.1-2.781-3.027-6.593-5.83-8.679a113.74 113.74 0 0 0-10.2-7.232c-1.457.964-3.278 1.535-4.372 2.893a8.355 8.355 0 0 0-1.457 4.34c-.806 7.2.852 14.82-1.457 21.7-1.3 3.881-6.458 5.275-8.745 8.679-1.943 2.893-2.431 7.835-5.83 8.679l-11.659 2.893c-.972 1.446-1.547 3.253-2.915 4.339-1.2.952-3 .765-4.372 1.446a25.031 25.031 0 0 0-4.372 2.893c-1.073.852-1.842 2.041-2.915 2.893-4.036 3.2-4.127 2.812-8.745 4.339-1.943 2.893-4.263 5.569-5.83 8.679-.972 1.929-1.379 4.261-2.915 5.786-1.086 1.078-2.915.964-4.372 1.447-.972 1.446-2.741 2.609-2.915 4.339-.342 3.392.935 6.755 1.457 10.125 1.466 9.455.65 6.274 2.915 13.018.486 2.893.741 5.833 1.457 8.679 2.654 10.535 2.211 6.085 5.83 14.465 2.072 4.792-3.157 5.299 2.915 1.442z"
            className="cls-4"
            transform="translate(18.683 45.139)"
          />
          <Tooltip
            placement="top"
            color="white"
            title={
              <div className={`${style.tooltip} py-1 px-3 `}>
                <p className={`text-dark m-0`}>Total Approval - 120 bn</p>
                <p className={`text-dark m-0`}>15% of Portfolio</p>
                <p className={`text-dark m-0`}>Total Projects - 78</p>
              </div>
            }
          >
            <path
              id="Path_47"
              d="M377.672-367.94a16.849 16.849 0 0 0-16.613 17.032c0 11.658 14.866 28.773 15.5 29.49a1.466 1.466 0 0 0 2.222 0c.636-.726 15.5-17.832 15.5-29.49a16.838 16.838 0 0 0-16.609-17.032zm0 25.6a8.483 8.483 0 0 1-8.361-8.571 8.483 8.483 0 0 1 8.361-8.571 8.483 8.483 0 0 1 8.361 8.571 8.477 8.477 0 0 1-8.361 8.574z"
              className="cls-5"
              transform="translate(53.966 29.005)"
            />
          </Tooltip>
          <g id="Group_88-2" transform="translate(389.901 -277.979)">
            <text
              id="Jerusalem"
              fill="#fff"
              fontFamily="Lato-Bold, Lato"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="0em"
              transform="translate(0 9)"
            >
              <tspan x="0" y="0">
                Jerusalem
              </tspan>
            </text>
          </g>
          <Tooltip
            placement="top"
            color="white"
            title={
              <div className={`${style.tooltip} py-1 px-3 `}>
                <p className={`text-dark m-0`}>Total Approval - 120 bn</p>
                <p className={`text-dark m-0`}>15% of Portfolio</p>
                <p className={`text-dark m-0`}>Total Projects - 78</p>
              </div>
            }
          >
            <path
              id="Path_48"
              d="M167.247-241.941c-9.474 0-17.186 7.457-17.186 16.617 0 11.374 15.379 28.071 16.037 28.77a1.577 1.577 0 0 0 2.3 0c.658-.708 16.037-17.4 16.037-28.77.008-9.161-7.705-16.617-17.188-16.617zm0 24.979a8.524 8.524 0 0 1-8.649-8.362 8.524 8.524 0 0 1 8.649-8.362 8.524 8.524 0 0 1 8.649 8.362 8.518 8.518 0 0 1-8.649 8.362z"
              className="cls-5"
              transform="translate(22.429 47.838)"
            />
          </Tooltip>
          <g id="Group_89" transform="translate(166.863 -136.904)">
            <text
              id="Gaza"
              fill="#fff"
              fontFamily="Lato-Bold, Lato"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="0.002em"
              transform="translate(0 10)"
            >
              <tspan x="0" y="0">
                Gaza
              </tspan>
            </text>
          </g>
          <Tooltip
            placement="top"
            color="white"
            title={
              <div className={`${style.tooltip} py-1 px-3 `}>
                <p className={`text-dark m-0`}>Total Approval - 120 bn</p>
                <p className={`text-dark m-0`}>15% of Portfolio</p>
                <p className={`text-dark m-0`}>Total Projects - 78</p>
              </div>
            }
          >
            <path
              id="Path_49"
              d="M391.247-475.94a17.133 17.133 0 0 0-17.186 17.032c0 11.658 15.379 28.773 16.037 29.49a1.551 1.551 0 0 0 2.3 0c.658-.726 16.037-17.832 16.037-29.49a17.121 17.121 0 0 0-17.188-17.032zm0 25.6a8.625 8.625 0 0 1-8.649-8.571 8.625 8.625 0 0 1 8.649-8.571 8.625 8.625 0 0 1 8.649 8.571 8.619 8.619 0 0 1-8.649 8.575z"
              className="cls-5"
              transform="translate(55.909 12.863)"
            />
          </Tooltip>
          <g id="Group_90" transform="translate(404.657 -396.972)">
            <text
              id="West_Bank"
              fill="#fff"
              fontFamily="Lato-Bold, Lato"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="-0.005em"
              transform="translate(0 9)"
            >
              <tspan x="0" y="0">
                West Bank
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
