import React from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";

function CustomInput({ onFocus, value, onChange }) {
  return (
    <InputGroup className="eventdash_date_filter w-100">
      <Form.Control value={value} onChange={onChange} onFocus={onFocus} />
      <InputGroup.Text id="basic-addon2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1C8.55229 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.00003C17.4591 3.00031 17.8592 3.00313 18.1949 3.03057C18.5902 3.06289 18.9831 3.13424 19.3614 3.32698C19.9248 3.61405 20.3851 4.07224 20.6732 4.63781C20.8659 5.016 20.9372 5.40906 20.9695 5.80396C21 6.17815 21 6.6323 21 7.15839V16.8421C21 17.3682 21 17.8221 20.9695 18.1962C20.9372 18.591 20.8659 18.9838 20.6732 19.3619C20.3854 19.9269 19.9254 20.3859 19.3614 20.6732C18.9833 20.8659 18.5905 20.9372 18.1957 20.9695C17.8217 21 17.3677 21 16.8416 21H7.15839C6.6323 21 6.17815 21 5.80397 20.9695C5.40906 20.9372 5.016 20.8659 4.63781 20.6732C4.07276 20.3853 3.61431 19.9258 3.32698 19.3619C3.13421 18.9835 3.06288 18.5904 3.03057 18.1951C2.99997 17.8206 2.99998 17.3659 3 16.8388V7.16168C2.99998 6.6345 2.99997 6.17965 3.03057 5.80498C3.06286 5.40962 3.13416 5.01624 3.32698 4.63781C3.6146 4.07332 4.07332 3.6146 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.14079 3.00314 6.54102 3.00031 7 3.00003V2C7 1.44772 7.44772 1 8 1ZM5.9678 5.02393C5.69595 5.04613 5.59517 5.08383 5.54579 5.10899C5.35763 5.20487 5.20487 5.35763 5.109 5.54579C5.08383 5.59517 5.04614 5.69595 5.02393 5.9678C5.00358 6.21702 5.00052 6.53498 5.00007 7H18.9999C18.9995 6.53429 18.9965 6.21614 18.9761 5.96686C18.9539 5.69554 18.9163 5.595 18.8912 5.54579C18.7959 5.35871 18.6427 5.20542 18.4534 5.10899C18.4039 5.08374 18.3032 5.0461 18.0319 5.02392C17.7488 5.00078 17.3768 5 16.8002 5H7.2002C6.62365 5 6.25126 5.00078 5.9678 5.02393ZM19 9H5V16.8002C5 17.3768 5.00078 17.7489 5.02393 18.0322C5.04612 18.3037 5.08378 18.4044 5.109 18.4539C5.20516 18.6426 5.35819 18.7956 5.54579 18.8912C5.595 18.9163 5.69554 18.9539 5.96686 18.9761C6.2498 18.9992 6.62146 19 7.19691 19H16.8031C17.3786 19 17.75 18.9992 18.0327 18.9761C18.3036 18.9539 18.4041 18.9164 18.4534 18.8912C18.6421 18.7951 18.7956 18.6415 18.8912 18.4539C18.9164 18.4046 18.954 18.3041 18.9761 18.0332C18.9992 17.7505 19 17.379 19 16.8036V9ZM7 12C7 11.4477 7.44772 11 8 11H8.002C8.27127 11 8.52916 11.1086 8.71732 11.3012C8.90548 11.4938 9.00802 11.7542 9.00173 12.0234L9.00168 12.0254C8.99548 12.2906 8.88414 12.5425 8.69215 12.7256C8.50016 12.9087 8.24327 13.0081 7.97804 13.0017H7.97608C7.43327 12.9887 7 12.5449 7 12.002V12ZM11 12C11 11.4477 11.4477 11 12 11H12.002C12.2713 11 12.5292 11.1086 12.7173 11.3012C12.9055 11.4938 13.008 11.7542 13.0017 12.0234V12.0254C12.9955 12.2906 12.8841 12.5425 12.6921 12.7256C12.5002 12.9087 12.2433 13.0081 11.978 13.0017H11.9761C11.4333 12.9887 11 12.5449 11 12.002V12ZM15 12C15 11.4477 15.4477 11 16 11H16.002C16.5542 11 17.002 11.4477 17.002 12V12.002C17.002 12.2714 16.8933 12.5293 16.7006 12.7175C16.5078 12.9057 16.2473 13.0082 15.978 13.0017H15.9761C15.4333 12.9887 15 12.5449 15 12.002V12ZM7 16C7 15.4477 7.44772 15 8 15H8.002C8.27127 15 8.52916 15.1086 8.71732 15.3012C8.90548 15.4938 9.00802 15.7542 9.00173 16.0234L9.00168 16.0254C8.99548 16.2906 8.88414 16.5425 8.69215 16.7256C8.50016 16.9087 8.24327 17.0081 7.97804 17.0017H7.97608C7.43327 16.9887 7 16.5449 7 16.002V16ZM11 16C11 15.4477 11.4477 15 12 15H12.002C12.2713 15 12.5292 15.1086 12.7173 15.3012C12.9055 15.4938 13.008 15.7542 13.0017 16.0234V16.0254C12.9955 16.2906 12.8841 16.5425 12.6921 16.7256C12.5002 16.9087 12.2433 17.0081 11.978 17.0017H11.9761C11.4333 16.9887 11 16.5449 11 16.002V16ZM15 16C15 15.4477 15.4477 15 16 15H16.002C16.2713 15 16.5292 15.1086 16.7173 15.3012C16.9055 15.4938 17.008 15.7542 17.0017 16.0234V16.0254C16.9955 16.2906 16.8841 16.5425 16.6921 16.7256C16.5002 16.9087 16.2433 17.0081 15.978 17.0017H15.9761C15.4333 16.9887 15 16.5449 15 16.002V16Z"
            fill="#1E3CAA"
          />
        </svg>
      </InputGroup.Text>
    </InputGroup>
  );
}

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

export default function StepSix() {
  const [eventPublishAction, setEventPublishAction] = useState("now");
  return (
    <div className="step_six_container">
      <div className="row align-items-center mb-3">
        <Form.Label className="col-lg-2 col-md-3 mb-md-0 mb-3 create_event_form_label text-md-center text-start">
          Who can see the event ?
        </Form.Label>
        <div className="col-lg-10 col-md-9">
          <Form.Select className="create_event_form_input create_event_form_select">
            <option value={""}></option>
            <option value={"public"}>Public</option>
            <option value={"hidden"}>Hidden</option>
            <option value={"code"}>Visible through code</option>
          </Form.Select>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <Form.Label className="col-lg-2 col-md-3 mb-md-0 mb-3 text-md-center text-start create_event_form_label">
          publication date :
        </Form.Label>
        <div className="col-lg-10 col-md-9 publish_options d-sm-flex justify-content-sm-between">
          <div className="_option mb-sm-0 mb-2 d-flex align-items-sm-center justify-content-sm-start">
            <Form.Check
              name="group1"
              className="me-2"
              value={"draft"}
              type={"radio"}
              onChange={(e) => {
                setEventPublishAction(e.target.value);
              }}
              checked={eventPublishAction === "draft"}
            />
            <div className="_icon me-1">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_173_5)">
                  <path
                    d="M17.091 16.0908H8.90918V17.7272H17.091V16.0908Z"
                    fill="black"
                  />
                  <path
                    d="M8.90918 19.3633V20.1814V20.9996H17.091V20.1814V19.3633H8.90918Z"
                    fill="black"
                  />
                  <path
                    d="M21.8361 7.70542L18.5485 3.32695C18.394 3.12115 18.1516 3 17.8942 3H16.5455V3.81819V4.63638V9.8182C16.5455 10.27 16.1791 10.6364 15.7273 10.6364H8.09092C7.63906 10.6364 7.27273 10.27 7.27273 9.8182V4.63635V3.81819V3H4.81819C4.36633 3 4 3.3664 4 3.81819V20.1818C4 20.6336 4.36633 21 4.81819 21H7.27273V20.1818V19.3636V18.5454V15.2727C7.27273 14.8208 7.63906 14.4545 8.09092 14.4545H17.9091C18.361 14.4545 18.7273 14.8208 18.7273 15.2727V18.5454V19.3636V20.1818V21H21.1818C21.6337 21 22 20.6336 22 20.1818V8.19669C22 8.01954 21.9424 7.84706 21.8361 7.70542Z"
                    fill="black"
                  />
                  <path
                    d="M8.90918 3V3.81819V4.63635V9.00001H14.9092V4.63635V3.81819V3H8.90918Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_173_5">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(4 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="_label">Save As Draft</div>
          </div>
          <div className="_option mb-sm-0 mb-2 d-flex align-items-sm-center justify-content-sm-center">
            <Form.Check
              name="group1"
              className="me-2"
              value={"later"}
              type={"radio"}
              onChange={(e) => {
                setEventPublishAction(e.target.value);
              }}
              checked={eventPublishAction === "later"}
            />
            <div className="_icon me-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.0419 5.13366V3.20866H16.2252C16.928 3.20866 17.478 2.65866 17.478 1.95588V1.22255C17.478 1.06977 17.3252 0.916992 17.1725 0.916992H4.82802C4.67524 0.916992 4.52246 1.06977 4.52246 1.22255V1.95588C4.52246 2.65866 5.07246 3.20866 5.77524 3.20866H5.95857V5.13366C5.95857 7.73088 7.60857 10.0531 9.96135 11.0003C7.57802 11.9475 5.95857 14.2698 5.95857 16.867V18.792H5.77524C5.07246 18.792 4.52246 19.342 4.52246 20.0448V20.7781C4.52246 20.9309 4.67524 21.0837 4.82802 21.0837H17.1419C17.2947 21.0837 17.4475 20.9309 17.4475 20.7781V20.0448C17.4475 19.342 16.8975 18.792 16.1947 18.792H16.0114V16.867C16.0114 14.2698 14.3614 11.9475 12.0086 11.0003C14.3919 10.0531 16.0419 7.73088 16.0419 5.13366ZM15.4308 16.867V18.792H14.4225C14.2697 17.417 13.5058 16.1642 12.3447 15.3698C12.2836 15.3392 12.2225 15.3087 12.1613 15.3087H9.80857C9.74746 15.3087 9.68635 15.3392 9.62524 15.3698C8.46413 16.1642 7.70024 17.417 7.54746 18.792H6.53913V16.867C6.56968 14.2392 8.43357 11.917 11.0002 11.3059C13.5669 11.917 15.4308 14.2392 15.4308 16.867ZM11.0002 10.6948C8.43357 10.1142 6.56968 7.76144 6.56968 5.13366V3.20866H15.4308V5.13366C15.4308 7.76144 13.5669 10.0837 11.0002 10.6948Z"
                  fill="black"
                />
                <path
                  d="M13.7199 6.72266H8.28102C8.03658 6.72266 7.91435 6.9671 8.00602 7.15043C8.58658 8.3421 9.65602 9.25877 10.9088 9.65599C10.9699 9.68655 11.031 9.65599 11.0921 9.65599C12.3449 9.25877 13.4144 8.37266 13.9949 7.15043C14.0866 6.9671 13.9338 6.72266 13.7199 6.72266Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="_label">Publish Later</div>
          </div>
          <div className="_option mb-sm-0 mb-2 d-flex align-items-sm-center justify-content-sm-end">
            <Form.Check
              name="group1"
              className="me-2"
              value={"now"}
              type={"radio"}
              onChange={(e) => {
                setEventPublishAction(e.target.value);
              }}
              checked={eventPublishAction === "now"}
            />
            <div className="_icon me-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M15.0864 5.59148C16.2424 6.31624 17.0529 7.54268 17.2005 8.9663C17.6719 9.18657 18.1951 9.31324 18.7498 9.31324C20.775 9.31324 22.4164 7.67185 22.4164 5.64701C22.4164 3.62186 20.775 1.98047 18.7498 1.98047C16.744 1.98109 15.117 3.59316 15.0864 5.59148ZM12.6844 13.0987C14.7095 13.0987 16.3509 11.4569 16.3509 9.43211C16.3509 7.40728 14.7092 5.76588 12.6844 5.76588C10.6596 5.76588 9.01722 7.40759 9.01722 9.43242C9.01722 11.4573 10.6596 13.0987 12.6844 13.0987ZM14.2397 13.3486H11.1285C8.53987 13.3486 6.43392 15.4548 6.43392 18.0434V21.8482L6.44359 21.9078L6.70567 21.9898C9.17603 22.7617 11.3222 23.0191 13.0887 23.0191C16.5391 23.0191 18.5389 22.0354 18.6622 21.9727L18.9071 21.8488H18.9333V18.0434C18.9342 15.4548 16.8283 13.3486 14.2397 13.3486ZM20.3058 9.56346H17.2186C17.1852 10.7986 16.6579 11.9109 15.824 12.7108C18.1249 13.395 19.8084 15.5288 19.8084 18.049V19.2215C22.8566 19.1098 24.6131 18.2459 24.7289 18.1879L24.9738 18.0637H25V14.2577C25 11.6694 22.894 9.56346 20.3058 9.56346ZM6.25078 9.31386C6.96805 9.31386 7.63541 9.10452 8.20074 8.74791C8.38044 7.57575 9.0088 6.55148 9.9064 5.85386C9.91015 5.78522 9.9167 5.71721 9.9167 5.64795C9.9167 3.6228 8.27499 1.9814 6.25078 1.9814C4.22532 1.9814 2.58424 3.6228 2.58424 5.64795C2.58424 7.67216 4.22532 9.31386 6.25078 9.31386ZM9.54356 12.7108C8.71365 11.915 8.18826 10.8086 8.14988 9.58093C8.03538 9.57251 7.92213 9.56346 7.80544 9.56346H4.69456C2.10595 9.56346 0 11.6694 0 14.2577V18.0631L0.00967178 18.1217L0.271746 18.2044C2.25353 18.8231 4.02221 19.1083 5.55847 19.1981V18.049C5.55909 15.5288 7.24198 13.3957 9.54356 12.7108Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="_label">Publish Now</div>
          </div>
        </div>
      </div>
      {eventPublishAction === "later" ? (
        <div className="row">
          <div className="col-lg-2 col-md-3 d-md-block d-none mb-md-0 mb-3"></div>
          <div className="col-lg-10 col-md-9 publish_options_time">
            <div className="_input_date mb-sm-0 mb-3">
              <DatePicker
                render={<CustomInput />}
                weekDays={weekDays}
                highlightToday={false}
                showOtherDays
              />
            </div>
            <div className="_input_time event_dates_box_time_picker">
              <DatePicker
                disableDayPicker
                format="HH:mm"
                // plugins={[<TimePicker hideSeconds />]}
              />
              <div className="event_dates_box_time_picker_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <g clipPath="url(#clip0_54_12956)">
                    <path
                      d="M19.6319 3.36829C17.4598 1.19623 14.5716 0 11.5 0C8.42841 0 5.54018 1.19623 3.36812 3.36829C1.19606 5.54036 0 8.42818 0 11.5C0 14.5718 1.19606 17.4596 3.36812 19.6317C5.54018 21.8038 8.42841 23 11.5 23C14.5716 23 17.4598 21.8038 19.6319 19.6317C21.8039 17.4596 23 14.5718 23 11.5C23 8.42818 21.8039 5.54036 19.6319 3.36829ZM11.5 21.0669C6.22495 21.0669 1.93292 16.7752 1.93292 11.5C1.93292 6.22478 6.22495 1.93315 11.5 1.93315C16.7751 1.93315 21.0671 6.22478 21.0671 11.5C21.0671 16.7752 16.7751 21.0669 11.5 21.0669Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M7.98094 17.6067C7.61024 17.3928 7.13581 17.5195 6.92116 17.8902C6.70732 18.2614 6.83457 18.7359 7.20527 18.9499C7.32728 19.0205 7.46092 19.0542 7.59259 19.0542C7.86043 19.0542 8.1209 18.9151 8.26477 18.6664C8.47884 18.2951 8.35199 17.8207 7.98094 17.6067Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M7.57905 5.50609C7.71119 5.50609 7.84539 5.4724 7.96798 5.40133C8.33811 5.18628 8.46438 4.71133 8.24921 4.34114C8.03365 3.9705 7.55933 3.84475 7.18903 4.05974C6.81838 4.27479 6.69269 4.74922 6.9078 5.11987C7.05172 5.36763 7.31156 5.50609 7.57905 5.50609Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M4.3322 8.26933C4.45416 8.33931 4.58738 8.37306 4.71894 8.37306C4.98695 8.37306 5.248 8.23402 5.39135 7.98476C5.60531 7.61412 5.47794 7.13968 5.10724 6.92573C4.73608 6.71125 4.2617 6.83856 4.04769 7.20966C3.83367 7.58094 3.96109 8.05485 4.3322 8.26933Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M11.4866 4.45346C11.4871 4.45346 11.4871 4.45346 11.4875 4.45346C11.916 4.45237 12.2626 4.10473 12.2622 3.67629C12.261 3.2478 11.9136 2.90125 11.485 2.90229C11.0565 2.9028 10.71 3.25051 10.7109 3.67888C10.7115 4.10685 11.0585 4.45346 11.4866 4.45346Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M4.33891 14.7473C3.96821 14.9618 3.84194 15.4362 4.0571 15.807C4.20102 16.0551 4.4615 16.1938 4.72899 16.1938C4.86107 16.1938 4.9947 16.1601 5.11729 16.0889C5.48793 15.8745 5.61409 15.3994 5.39904 15.0293C5.18404 14.6586 4.70955 14.5322 4.33891 14.7473Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M4.45346 11.5081C4.45289 11.0796 4.10524 10.7331 3.67687 10.7335C3.24844 10.734 2.90183 11.0817 2.90234 11.5096C2.90292 11.9381 3.24999 12.2846 3.67796 12.2846H3.67836C4.10697 12.2841 4.45404 11.9364 4.45346 11.5081Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M11.5036 18.5466C11.0758 18.5471 10.7285 18.8943 10.7285 19.3226C10.7291 19.7511 11.0763 20.0983 11.5047 20.0977C11.9331 20.0977 12.2803 19.75 12.2798 19.3216C12.2798 18.8936 11.9323 18.5466 11.5036 18.5466Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M18.6644 14.7393C18.2938 14.5249 17.8195 14.6515 17.6048 15.0222C17.3904 15.3929 17.5171 15.8673 17.8878 16.0818C18.0104 16.1525 18.144 16.1861 18.2755 16.1861C18.5435 16.1861 18.804 16.0476 18.9473 15.7988C19.1619 15.4282 19.0351 14.9537 18.6644 14.7393Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M19.3208 10.7062C18.8924 10.7073 18.5457 11.0556 18.5469 11.4839C18.5469 11.4882 18.5469 11.4926 18.5469 11.4962C18.5469 11.4979 18.5469 11.4989 18.5469 11.5C18.5469 11.9285 18.8939 12.2756 19.3223 12.2756C19.7509 12.2756 20.0979 11.9285 20.0979 11.5C20.0979 11.4973 20.0979 11.4941 20.0979 11.4909C20.0979 11.4877 20.0979 11.4839 20.0979 11.4802C20.097 11.0518 19.7491 10.7057 19.3208 10.7062Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M15.0114 5.38899C15.1333 5.4596 15.2666 5.49272 15.3981 5.49272C15.6661 5.49272 15.9271 5.35368 16.0705 5.10442C16.2845 4.73314 16.1571 4.25877 15.786 4.04481C15.4147 3.83137 14.9402 3.95867 14.7268 4.32995C14.513 4.70111 14.6402 5.1756 15.0114 5.38899Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M15.0252 17.6031C14.6546 17.8175 14.5279 18.2919 14.7429 18.6626C14.8868 18.9108 15.1471 19.0498 15.4147 19.0498C15.5469 19.0498 15.6801 19.0161 15.8025 18.9452C16.1732 18.7307 16.2994 18.2562 16.085 17.8854C15.8704 17.5147 15.3959 17.388 15.0252 17.6031Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M18.268 8.35009C18.4007 8.35009 18.5344 8.31582 18.6574 8.24469C19.0276 8.02913 19.1534 7.55469 18.9378 7.18457C18.7227 6.81386 18.2477 6.68869 17.8776 6.90374C17.5074 7.11873 17.3817 7.59368 17.5968 7.96386C17.7407 8.21152 18.0006 8.35009 18.268 8.35009Z"
                      fill="#1E3CAA"
                    />
                    <path
                      d="M16.3737 12.0437L12.3009 11.7659L11.8944 5.80065C11.8803 5.59543 11.7097 5.4361 11.5039 5.4361C11.2982 5.4361 11.1277 5.59543 11.1136 5.80065L10.7142 11.6577L10.0624 11.6133C9.97542 11.6073 9.88992 11.6377 9.82627 11.6972C9.76273 11.7567 9.72656 11.8399 9.72656 11.9271V12.788C9.72656 12.8752 9.76273 12.9584 9.82627 13.0178C9.88469 13.0724 9.96156 13.1026 10.041 13.1026C10.048 13.1026 10.0552 13.1023 10.0624 13.1019L10.6184 13.0639L10.5783 13.6509C10.571 13.7591 10.6088 13.8654 10.6827 13.9445C10.7567 14.0237 10.8602 14.0687 10.9687 14.0687H12.0392C12.0397 14.0687 12.0402 14.0687 12.0404 14.0687C12.2564 14.0687 12.4315 13.8935 12.4315 13.6775C12.4315 13.6584 12.3815 12.9435 12.3815 12.9435L16.3739 12.6713C16.539 12.66 16.6672 12.5229 16.6672 12.3574C16.6669 12.1921 16.5388 12.055 16.3737 12.0437Z"
                      fill="#1E3CAA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_54_12956">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
