import React, { useEffect } from "react";
import "./EventCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EventCard({ eventData }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const cardBgStyles = {
    backgroundImage: `url(${eventData.eventImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  function formatTimeToAmPm(timeString) {
    const [hours, minutes] = timeString.split(":");
    let period = "am";

    let hoursNum = parseInt(hours);
    if (hoursNum >= 12) {
      if (hoursNum > 12) {
        hoursNum -= 12;
      }
      period = "pm";
    } else if (hoursNum === 0) {
      hoursNum = 12;
    }

    return `${hoursNum}:${minutes}${period}`;
  }
  return (
    <div className="event_card_outerbox" >
      <div className="event_card_innerbox">
        <div className="event_card_bg" style={cardBgStyles}>
          <div className="event_card_status">
            {eventData.status === "draft" ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2084 3.26667V2.04167H10.325C10.7723 2.04167 11.1223 1.69167 11.1223 1.24445V0.77778C11.1223 0.680558 11.025 0.583336 10.9278 0.583336H3.07225C2.97503 0.583336 2.87781 0.680558 2.87781 0.77778V1.24445C2.87781 1.69167 3.22781 2.04167 3.67503 2.04167H3.7917V3.26667C3.7917 4.91945 4.8417 6.39722 6.33892 7C4.82225 7.60278 3.7917 9.08056 3.7917 10.7333V11.9583H3.67503C3.22781 11.9583 2.87781 12.3083 2.87781 12.7556V13.2222C2.87781 13.3194 2.97503 13.4167 3.07225 13.4167H10.9084C11.0056 13.4167 11.1028 13.3194 11.1028 13.2222V12.7556C11.1028 12.3083 10.7528 11.9583 10.3056 11.9583H10.1889V10.7333C10.1889 9.08056 9.13892 7.60278 7.6417 7C9.15836 6.39722 10.2084 4.91945 10.2084 3.26667ZM9.81947 10.7333V11.9583H9.17781C9.08059 11.0833 8.59447 10.2861 7.85559 9.78056C7.8167 9.76111 7.77781 9.74167 7.73892 9.74167H6.2417C6.20281 9.74167 6.16392 9.76111 6.12503 9.78056C5.38614 10.2861 4.90003 11.0833 4.80281 11.9583H4.16114V10.7333C4.18059 9.06111 5.3667 7.58334 7.00003 7.19445C8.63336 7.58334 9.81947 9.06111 9.81947 10.7333ZM7.00003 6.80556C5.3667 6.43611 4.18059 4.93889 4.18059 3.26667V2.04167H9.81947V3.26667C9.81947 4.93889 8.63336 6.41667 7.00003 6.80556Z"
                  fill="#64C3C5"
                />
                <path
                  d="M8.73055 4.27778H5.26944C5.11389 4.27778 5.03611 4.43333 5.09444 4.55C5.46389 5.30833 6.14444 5.89167 6.94166 6.14445C6.98055 6.16389 7.01944 6.14445 7.05833 6.14445C7.85555 5.89167 8.53611 5.32778 8.90555 4.55C8.96389 4.43333 8.86666 4.27778 8.73055 4.27778Z"
                  fill="#64C3C5"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.65531 2.31104C10.3951 2.77489 10.9139 3.55982 11.0083 4.47093C11.31 4.61191 11.6449 4.69297 11.9999 4.69297C13.296 4.69297 14.3465 3.64248 14.3465 2.34659C14.3465 1.05049 13.296 0 11.9999 0C10.7162 0.000399351 9.67488 1.03212 9.65531 2.31104ZM8.11801 7.11564C9.4141 7.11564 10.4646 6.06494 10.4646 4.76905C10.4646 3.47316 9.4139 2.42266 8.11801 2.42266C6.82211 2.42266 5.77102 3.47336 5.77102 4.76925C5.77102 6.06514 6.82211 7.11564 8.11801 7.11564ZM9.11339 7.27558H7.12223C5.46552 7.27558 4.11771 8.62359 4.11771 10.2803V12.7153L4.1239 12.7535L4.29163 12.806C5.87266 13.3 7.24622 13.4647 8.37679 13.4647C10.585 13.4647 11.8649 12.8351 11.9438 12.795L12.1005 12.7157H12.1173V10.2803C12.1179 8.62359 10.7701 7.27558 9.11339 7.27558ZM12.9957 4.85311H11.0199C10.9985 5.64363 10.6611 6.35547 10.1273 6.86744C11.6 7.30533 12.6774 8.67091 12.6774 10.2839V11.0343C14.6282 10.9628 15.7524 10.4099 15.8265 10.3727L15.9832 10.2933H16V7.85743C16 6.20092 14.6522 4.85311 12.9957 4.85311ZM4.0005 4.69337C4.45955 4.69337 4.88666 4.55939 5.24847 4.33116C5.36348 3.58098 5.76563 2.92545 6.3401 2.47897C6.34249 2.43504 6.34669 2.39151 6.34669 2.34719C6.34669 1.05109 5.29599 0.000598983 4.0005 0.000598983C2.70421 0.000598983 1.65391 1.05109 1.65391 2.34719C1.65391 3.64268 2.70421 4.69337 4.0005 4.69337ZM6.10787 6.86744C5.57674 6.35807 5.24048 5.65002 5.21592 4.8643C5.14264 4.8589 5.07016 4.85311 4.99548 4.85311H3.00452C1.34781 4.85311 0 6.20092 0 7.85743V10.2929L0.00618994 10.3304L0.173917 10.3833C1.44226 10.7793 2.57422 10.9618 3.55742 11.0193V10.2839C3.55782 8.67091 4.63487 7.30573 6.10787 6.86744Z"
                  fill="#64C3C5"
                />
              </svg>
            )}
            <span className="ms-2 fw-bold">{eventData.status}</span>
          </div>
        </div>
        <div className="event_card_details d-flex flex-column justify-content-between">
          <div className="text-start px-3">
            <div className="d-flex align-items-center justify-content-between">
              <p className="event_name mb-0">{eventData.eventName}</p>
              {eventData.online ? (
                <div className="event_online_status">
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.331429L0.355556 0.0571429L1.77778 0H7.37778L7.73333 0.148571L8 0.605714V3.34857V5.54286L7.64444 5.90857L7.02222 6L6.66667 5.63429L6.4 5.54286L6.04444 5.17714L5.86667 5.08571L5.6 5.45143V4.53714L6.84444 4.62857L7.37778 4.53714V0.88L7.28889 0.514286L1.86667 0.605714H0.622222L0.533333 4.26286L0.711111 4.62857H3.46667H4.97778V5.54286L4.88889 6L0.444444 5.90857L0.177778 5.63429L0.0888889 5.36L0 2.25143V0.331429Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ms-1">Online</span>
                </div>
              ) : null}
            </div>
            {/* {eventData.recurring > 1 ? (
              <div className="event_recurring">
                <span>Recurring event : </span>
                <span>{eventData.recurring} events</span>
              </div>
            ) : null} */}
            <div className="event_date">
              <span className="detail_icon">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 6 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_2950)">
                    <path
                      d="M2.01639 4.0845C2.01639 4.17424 1.94297 4.24764 1.85325 4.24764H1.03753C0.947812 4.24764 0.87439 4.17422 0.87439 4.0845V3.53926C0.87439 3.44952 0.947812 3.37612 1.03753 3.37612H1.85325C1.94299 3.37612 2.01639 3.44954 2.01639 3.53926V4.0845Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M2.01627 5.51719C2.01627 5.60693 1.94285 5.68033 1.85313 5.68033H1.03741C0.94769 5.68033 0.874268 5.60691 0.874268 5.51719V4.97195C0.874268 4.88221 0.94769 4.80881 1.03741 4.80881H1.85313C1.94287 4.80881 2.01627 4.88223 2.01627 4.97195V5.51719Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M3.57098 4.0845C3.57098 4.17424 3.49756 4.24764 3.40784 4.24764H2.5921C2.50236 4.24764 2.42896 4.17422 2.42896 4.0845V3.53926C2.42896 3.44952 2.50238 3.37612 2.5921 3.37612H3.40784C3.49757 3.37612 3.57098 3.44954 3.57098 3.53926V4.0845Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M3.57086 5.51719C3.57086 5.60693 3.49743 5.68033 3.40771 5.68033H2.59197C2.50224 5.68033 2.42883 5.60691 2.42883 5.51719V4.97195C2.42883 4.88221 2.50226 4.80881 2.59197 4.80881H3.40771C3.49745 4.80881 3.57086 4.88223 3.57086 4.97195V5.51719Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.10638 4.0845C5.10638 4.17424 5.03296 4.24764 4.94324 4.24764H4.1275C4.03776 4.24764 3.96436 4.17422 3.96436 4.0845V3.53926C3.96436 3.44952 4.03778 3.37612 4.1275 3.37612H4.94324C5.03297 3.37612 5.10638 3.44954 5.10638 3.53926V4.0845Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.10638 5.51719C5.10638 5.60693 5.03296 5.68033 4.94324 5.68033H4.1275C4.03776 5.68033 3.96436 5.60691 3.96436 5.51719V4.97195C3.96436 4.88221 4.03778 4.80881 4.1275 4.80881H4.94324C5.03297 4.80881 5.10638 4.88223 5.10638 4.97195V5.51719Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M1.2817 2.156C1.18423 2.156 1.10449 2.07626 1.10449 1.97877V1.0197C1.10449 0.92221 1.18423 0.842468 1.2817 0.842468H1.65037C1.74784 0.842468 1.8276 0.92221 1.8276 1.0197V1.97877C1.8276 2.07624 1.74786 2.156 1.65037 2.156H1.2817Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M4.35092 2.156C4.25345 2.156 4.17371 2.07626 4.17371 1.97877V1.0197C4.17371 0.92221 4.25345 0.842468 4.35092 0.842468H4.71959C4.81705 0.842468 4.89681 0.92221 4.89681 1.0197V1.97877C4.89681 2.07624 4.81707 2.156 4.71959 2.156H4.35092Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.82884 1.56722C5.82884 1.56722 5.53623 1.56722 5.31296 1.56722C5.28348 1.56722 5.22895 1.56722 5.22895 1.63517V1.93853C5.22895 2.22817 5.06852 2.46381 4.70367 2.46381H4.36426C4.01832 2.46381 3.83899 2.22817 3.83899 1.93853L3.83901 1.65102C3.83901 1.5967 3.80106 1.56722 3.75579 1.56722C3.3236 1.56722 2.70497 1.56722 2.25745 1.56722C2.2242 1.56722 2.16101 1.56722 2.16101 1.65328V1.93853C2.16101 2.22817 2.01659 2.46381 1.63574 2.46381H1.29633C0.874587 2.46381 0.771053 2.22817 0.771053 1.93853V1.6646C0.771053 1.58764 0.701777 1.56722 0.664061 1.56722C0.443396 1.56722 0.17118 1.56722 0.17118 1.56722C0.0770257 1.56722 0 1.64424 0 1.86522V6.43928C0 6.40662 0.0770257 6.48364 0.17118 6.48364H5.82882C5.92297 6.48364 6 6.40662 6 6.43928V1.86522C6 1.64424 5.92297 1.56722 5.82884 1.56722ZM5.61962 5.93206C5.61962 6.02622 5.54259 6.10324 5.44844 6.10324H0.551583C0.457428 6.10324 0.380403 6.02622 0.380403 5.93206V3.09776C0.380403 3.0036 0.457428 2.92658 0.551583 2.92658H5.44844C5.54259 2.92658 5.61962 3.0036 5.61962 3.09776V5.93206Z"
                      fill="#64C3C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_2950">
                      <rect
                        width="6"
                        height="6"
                        fill="white"
                        transform="translate(0 0.663086)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="detail_text">{eventData.eventDate}</span>
            </div>
            <div className="event_date">
              <span className="detail_icon">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_2919)">
                    <path
                      d="M6.82848 1.83467C6.07298 1.07917 5.06838 0.663086 4 0.663086C2.93162 0.663086 1.92702 1.07917 1.17152 1.83467C0.41602 2.59017 0 3.59463 0 4.66309C0 5.73155 0.41602 6.73601 1.17152 7.49151C1.92702 8.24701 2.93162 8.66309 4 8.66309C5.06838 8.66309 6.07298 8.24701 6.82848 7.49151C7.58398 6.73601 8 5.73155 8 4.66309C8 3.59463 7.58398 2.59017 6.82848 1.83467ZM4 7.99069C2.1652 7.99069 0.67232 6.49795 0.67232 4.66309C0.67232 2.82823 2.1652 1.33549 4 1.33549C5.8348 1.33549 7.32768 2.82823 7.32768 4.66309C7.32768 6.49795 5.8348 7.99069 4 7.99069Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M2.77606 6.78713C2.64712 6.71273 2.4821 6.75679 2.40744 6.88575C2.33306 7.01485 2.37732 7.17989 2.50626 7.25431C2.5487 7.27889 2.59518 7.29059 2.64098 7.29059C2.73414 7.29059 2.82474 7.24221 2.87478 7.15571C2.94924 7.02657 2.90512 6.86157 2.77606 6.78713Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M2.63611 2.57823C2.68207 2.57823 2.72875 2.56651 2.77139 2.54179C2.90013 2.46699 2.94405 2.30179 2.86921 2.17303C2.79423 2.04411 2.62925 2.00037 2.50045 2.07515C2.37153 2.14995 2.32781 2.31497 2.40263 2.44389C2.45269 2.53007 2.54307 2.57823 2.63611 2.57823Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M1.50678 3.53936C1.5492 3.5637 1.59554 3.57544 1.6413 3.57544C1.73452 3.57544 1.82532 3.52708 1.87518 3.44038C1.9496 3.31146 1.9053 3.14644 1.77636 3.07202C1.64726 2.99742 1.48226 3.0417 1.40782 3.17078C1.33338 3.29992 1.3777 3.46476 1.50678 3.53936Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M3.99549 2.21211C3.99569 2.21211 3.99569 2.21211 3.99583 2.21211C4.14487 2.21173 4.26541 2.09081 4.26529 1.94179C4.26487 1.79275 4.14401 1.67221 3.99495 1.67257C3.84589 1.67275 3.72537 1.79369 3.72571 1.94269C3.72589 2.09155 3.84661 2.21211 3.99549 2.21211Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M1.50928 5.79262C1.38034 5.86722 1.33642 6.03222 1.41126 6.1612C1.46132 6.24748 1.55192 6.29572 1.64496 6.29572C1.6909 6.29572 1.73738 6.284 1.78002 6.25926C1.90894 6.18468 1.95282 6.01944 1.87802 5.89068C1.80324 5.76176 1.6382 5.7178 1.50928 5.79262Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M1.54904 4.6659C1.54884 4.51684 1.42792 4.39632 1.27892 4.39648C1.1299 4.39666 1.00934 4.51758 1.00952 4.66642C1.00972 4.81546 1.13044 4.936 1.2793 4.936H1.27944C1.42852 4.93582 1.54924 4.81488 1.54904 4.6659Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M4.00115 7.11404C3.85235 7.11424 3.73157 7.23498 3.73157 7.38398C3.73177 7.53302 3.85255 7.65376 4.00155 7.65356C4.15055 7.65356 4.27133 7.53262 4.27113 7.3836C4.27115 7.23476 4.15027 7.11404 4.00115 7.11404Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M6.49186 5.78977C6.36298 5.71519 6.198 5.75925 6.12332 5.88819C6.04874 6.01711 6.09282 6.18213 6.22174 6.25675C6.26438 6.28133 6.31086 6.29301 6.3566 6.29301C6.44982 6.29301 6.54042 6.24485 6.59028 6.15831C6.66492 6.02939 6.6208 5.86435 6.49186 5.78977Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M6.72011 4.38699C6.57111 4.38737 6.45053 4.50849 6.45093 4.65749C6.45093 4.65899 6.45093 4.66049 6.45093 4.66177C6.45093 4.66235 6.45093 4.66271 6.45093 4.66309C6.45093 4.81211 6.57163 4.93285 6.72065 4.93285C6.86971 4.93285 6.99043 4.81211 6.99043 4.66309C6.99043 4.66215 6.99043 4.66103 6.99043 4.65993C6.99043 4.65881 6.99043 4.65749 6.99043 4.65621C6.99009 4.50719 6.86911 4.38681 6.72011 4.38699Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.22127 2.53749C5.26365 2.56205 5.31001 2.57357 5.35575 2.57357C5.44897 2.57357 5.53977 2.52521 5.58963 2.43851C5.66407 2.30937 5.61977 2.14437 5.49067 2.06995C5.36153 1.99571 5.19649 2.03999 5.12227 2.16913C5.04789 2.29823 5.09215 2.46327 5.22127 2.53749Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.22618 6.78589C5.09726 6.86047 5.0532 7.02547 5.12798 7.15443C5.17802 7.24073 5.26858 7.28911 5.36166 7.28911C5.40762 7.28911 5.45394 7.27739 5.49652 7.25271C5.62546 7.17811 5.66938 7.01307 5.5948 6.88409C5.52014 6.75515 5.3551 6.71107 5.22618 6.78589Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M6.35401 3.56748C6.40017 3.56748 6.44665 3.55556 6.48943 3.53082C6.61821 3.45584 6.66195 3.29082 6.58697 3.16208C6.51217 3.03314 6.34695 2.9896 6.21821 3.0644C6.08943 3.13918 6.04571 3.30438 6.12053 3.43314C6.17059 3.51928 6.26099 3.56748 6.35401 3.56748Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.69512 4.85221L4.27848 4.75559L4.13708 2.68071C4.1322 2.60933 4.07284 2.55391 4.00126 2.55391C3.9297 2.55391 3.87042 2.60933 3.8655 2.68071L3.7266 4.71795L3.49986 4.70249C3.46962 4.70041 3.43988 4.71099 3.41774 4.73169C3.39564 4.75237 3.38306 4.78133 3.38306 4.81165V5.11109C3.38306 5.14143 3.39564 5.17035 3.41774 5.19103C3.43806 5.21001 3.4648 5.22051 3.49244 5.22051C3.49488 5.22051 3.49736 5.22043 3.49986 5.22027L3.69326 5.20707L3.6793 5.41125C3.67678 5.44887 3.68992 5.48583 3.71564 5.51335C3.74136 5.54091 3.77738 5.55655 3.8151 5.55655H4.18746C4.18762 5.55655 4.1878 5.55655 4.18788 5.55655C4.263 5.55655 4.32392 5.49563 4.32392 5.42047C4.32392 5.41385 4.3065 5.16517 4.3065 5.16517L5.69518 5.07049C5.7526 5.06657 5.7972 5.01887 5.7972 4.96133C5.79708 4.90383 5.75254 4.85613 5.69512 4.85221Z"
                      fill="#64C3C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_2919">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(0 0.663086)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="detail_text">
                Doors opens at ( {formatTimeToAmPm(eventData.eventTime)} )
              </span>
            </div>
            <div className="event_date">
              <span className="detail_icon">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_31_2)">
                    <path
                      d="M1.60593 7.31796C1.60551 7.25475 1.62717 7.19338 1.66717 7.14443C1.70717 7.09549 1.76301 7.06206 1.82503 7.04989C2.02305 7.00962 2.20091 6.90178 2.32819 6.74483C2.45546 6.58788 2.52422 6.39157 2.52272 6.18951C2.52121 5.98744 2.44952 5.79218 2.31992 5.63715C2.19032 5.48211 2.01087 5.37694 1.81227 5.33963C1.75071 5.32769 1.69518 5.2948 1.65513 5.24655C1.61508 5.1983 1.59298 5.13766 1.59259 5.07496L1.58557 3.91397C1.58523 3.84204 1.61347 3.77292 1.66408 3.7218C1.68918 3.69645 1.71904 3.67629 1.75195 3.66249C1.78485 3.64869 1.82015 3.64152 1.85583 3.64138L10.382 3.60412C10.4539 3.60376 10.5229 3.63193 10.574 3.68244C10.6252 3.73295 10.6542 3.80168 10.6547 3.87354L10.6608 4.9076C10.6612 4.97498 10.6365 5.04011 10.5915 5.09029C10.5466 5.14048 10.4845 5.17214 10.4175 5.17911C10.2031 5.19917 10.004 5.29873 9.85939 5.45821C9.71475 5.61768 9.63502 5.82552 9.6359 6.04082C9.63679 6.25612 9.71822 6.46329 9.86417 6.62157C10.0101 6.77986 10.21 6.87778 10.4245 6.89608C10.4923 6.90153 10.5554 6.93217 10.6017 6.98195C10.6479 7.03173 10.6737 7.09703 10.6741 7.16495L10.6816 8.41058C10.682 8.48252 10.6538 8.55168 10.6032 8.60286C10.5527 8.65403 10.4839 8.68303 10.4119 8.68347L1.88576 8.73447C1.81382 8.73489 1.74465 8.70672 1.69348 8.65615C1.6423 8.60558 1.61331 8.53676 1.61287 8.46482L1.60593 7.31796ZM10.1376 8.14224L10.1331 7.3935C9.83654 7.31327 9.57448 7.13805 9.38704 6.89467C9.1996 6.65129 9.09711 6.35317 9.09528 6.04599C9.09344 5.7388 9.19235 5.43948 9.37687 5.19387C9.56138 4.94827 9.82132 4.76992 10.1169 4.68615L10.1134 4.14798L4.6059 4.17149L4.62954 8.17542L10.1376 8.14224ZM4.08699 8.17866L4.06304 4.17412L2.12982 4.18246L2.13399 4.86689C2.40573 4.96551 2.64074 5.14501 2.80737 5.38125C2.974 5.61748 3.06425 5.89909 3.06597 6.18817C3.06769 6.47725 2.9808 6.75992 2.81699 6.99812C2.65319 7.23632 2.42033 7.41861 2.14978 7.52045L2.15379 8.19023L4.08699 8.17866Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M5.37915 7.19515L5.36704 5.17017C5.3662 5.13415 5.37254 5.09833 5.38569 5.06479C5.39884 5.03125 5.41854 5.00066 5.44364 4.97482C5.46874 4.94897 5.49873 4.92838 5.53187 4.91425C5.56501 4.90012 5.60063 4.89273 5.63666 4.89252C5.67268 4.8923 5.70839 4.89926 5.7417 4.913C5.77501 4.92673 5.80525 4.94696 5.83065 4.9725C5.85606 4.99804 5.87612 5.02839 5.88967 5.06177C5.90322 5.09515 5.90999 5.1309 5.90958 5.16692L5.92169 7.19191C5.92088 7.26305 5.89216 7.33102 5.84172 7.38119C5.79128 7.43135 5.72316 7.4597 5.65202 7.46013C5.58088 7.46055 5.51241 7.43302 5.46138 7.38346C5.41034 7.3339 5.38081 7.26628 5.37915 7.19515Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M6.2936 5.16456C6.29349 5.0928 6.32182 5.02393 6.37237 4.97301C6.42292 4.92209 6.49158 4.89326 6.56333 4.89285C6.63508 4.89243 6.70408 4.92045 6.75522 4.97077C6.80636 5.0211 6.83549 5.08964 6.83622 5.16139L6.84826 7.1863C6.84744 7.25743 6.81873 7.32541 6.76829 7.37557C6.71784 7.42574 6.64972 7.45409 6.57858 7.45452C6.50744 7.45494 6.43898 7.42741 6.38794 7.37785C6.3369 7.32829 6.30737 7.26066 6.30571 7.18954L6.2936 5.16456Z"
                      fill="#64C3C5"
                    />
                    <path
                      d="M7.22037 5.15907C7.22119 5.08793 7.2499 5.01996 7.30034 4.96979C7.35079 4.91962 7.41891 4.89127 7.49005 4.89085C7.56119 4.89042 7.62965 4.91795 7.68069 4.96752C7.73173 5.01708 7.76126 5.0847 7.76292 5.15582L7.77495 7.18089C7.7758 7.2169 7.76946 7.25273 7.7563 7.28627C7.74315 7.31981 7.72345 7.35039 7.69835 7.37624C7.67326 7.40208 7.64326 7.42267 7.61012 7.4368C7.57698 7.45093 7.54136 7.45832 7.50533 7.45854C7.46931 7.45875 7.4336 7.45179 7.40029 7.43806C7.36699 7.42433 7.33675 7.4041 7.31134 7.37855C7.28594 7.35301 7.26587 7.32266 7.25232 7.28928C7.23877 7.2559 7.232 7.22015 7.23241 7.18413L7.22037 5.15907Z"
                      fill="#64C3C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_2">
                      <rect
                        width="10.4186"
                        height="10.4186"
                        fill="white"
                        transform="matrix(-0.00943502 0.999955 0.999955 0.00943502 0.970215 0.907669)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="detail_text">
                Tickets sold (
                <span className="fw-bold">{`${eventData.eventSoldTickets}/${eventData.eventTotalTickets}`}</span>
                )
              </span>
            </div>
            <div className="event_date">
              <span className="detail_icon">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_2979)">
                    <path
                      d="M3.28385 7.1549H3.69372C3.6896 7.11196 3.68678 7.06884 3.68678 7.02515C3.68678 6.98146 3.6896 6.93815 3.69372 6.8954H3.28385C3.18016 6.8954 3.09635 6.81158 3.09635 6.7079C3.09635 6.60421 3.18016 6.5204 3.28385 6.5204H3.78503C3.99878 5.9834 4.54066 5.60015 5.1761 5.60015C5.27978 5.60015 5.3636 5.68396 5.3636 5.78765C5.3636 5.89134 5.27978 5.97515 5.1761 5.97515C4.75572 5.97515 4.38935 6.19584 4.19941 6.5204H4.86072C4.96441 6.5204 5.04822 6.60421 5.04822 6.7079C5.04822 6.81158 4.96441 6.8954 4.86072 6.8954H4.07116C4.06553 6.93815 4.0616 6.98109 4.0616 7.02515C4.0616 7.06921 4.06553 7.11234 4.07116 7.1549H4.86072C4.96441 7.1549 5.04822 7.23871 5.04822 7.3424C5.04822 7.44609 4.96441 7.5299 4.86072 7.5299H4.19941C4.38935 7.85446 4.75572 8.07515 5.1761 8.07515C5.27978 8.07515 5.3636 8.15896 5.3636 8.26265C5.3636 8.36633 5.27978 8.45015 5.1761 8.45015C4.54066 8.45015 3.99878 8.0669 3.78503 7.5299H3.28385C3.18016 7.5299 3.09635 7.44609 3.09635 7.3424C3.09635 7.23871 3.18016 7.1549 3.28385 7.1549ZM3.6236 3.2534C3.07516 2.7944 2.42603 1.87246 2.43485 1.40709C2.4431 1.2329 2.47216 1.05084 2.62628 0.980148C2.7896 0.905336 2.93978 1.02234 3.07178 1.12509C3.15841 1.19259 3.28947 1.29309 3.35547 1.28015C3.39391 1.27134 3.44453 1.21152 3.49028 1.12002C3.49535 1.1099 3.50134 1.10034 3.5081 1.09134C3.74397 0.77746 3.92622 0.649398 4.11353 0.663461C4.34116 0.680148 4.45891 0.896335 4.57291 1.10559C4.64678 1.24134 4.7231 1.38177 4.8266 1.48471C4.83747 1.49559 4.8461 1.50309 4.85285 1.50796C4.88266 1.48265 4.93085 1.42415 4.9646 1.3829C5.14872 1.15865 5.49147 0.740711 6.21372 1.02965C6.28497 1.05796 6.33166 1.12715 6.33166 1.20384C6.33166 1.6304 6.07647 2.22965 5.76185 2.71415C6.0941 2.60915 6.4511 2.53809 6.68585 2.53809C7.30085 2.53809 7.36741 2.90671 7.36741 3.06534C7.36741 3.30759 7.24628 3.71409 6.43478 3.71409C6.2411 3.71409 6.03185 3.69046 5.83385 3.65652C6.77097 4.57696 7.78497 6.33402 7.79866 7.82896C7.80728 8.78127 7.08503 9.63871 6.2531 9.66384C6.25122 9.66384 6.24916 9.66384 6.24747 9.66384H2.72603C1.68391 9.66384 1.20503 8.71415 1.20072 7.83158C1.19247 6.0749 2.58635 3.94977 3.6236 3.2534ZM6.68585 2.91309C6.31797 2.91309 5.82316 3.07265 5.51735 3.20577C5.77028 3.27027 6.12485 3.33909 6.43497 3.33909C6.9926 3.33909 6.9926 3.13302 6.9926 3.06534C6.99241 3.01584 6.99241 2.91309 6.68585 2.91309ZM4.03778 3.09477C4.04228 3.09759 4.04472 3.10209 4.04885 3.10527C4.0526 3.10715 4.05691 3.10659 4.06047 3.10865C4.31903 3.25321 4.57816 3.24759 4.93235 3.09927C4.93835 3.09665 4.94472 3.0974 4.95091 3.09552C5.33697 2.7989 5.86928 1.90227 5.9471 1.33471C5.57322 1.23159 5.41816 1.42134 5.25466 1.62084C5.14928 1.74927 5.04053 1.88202 4.8701 1.89046C4.7651 1.89459 4.66028 1.84846 4.56166 1.7504C4.41991 1.60884 4.32616 1.43671 4.24366 1.28521C4.19397 1.1939 4.11897 1.05609 4.07903 1.03602C4.08185 1.03902 4.00403 1.05909 3.81766 1.30415C3.71753 1.4969 3.58985 1.61221 3.43816 1.64615C3.19872 1.70146 2.99191 1.53871 2.84116 1.42096C2.83197 1.41365 2.82166 1.40577 2.81116 1.39752C2.8106 1.40465 2.81022 1.41215 2.80985 1.42002C2.80347 1.74965 3.50041 2.75934 4.03778 3.09477ZM1.57572 7.82971C1.5791 8.53246 1.94041 9.28884 2.72603 9.28884H6.24466C6.92716 9.26634 7.42985 8.50209 7.42385 7.83215C7.4111 6.44634 6.43685 4.82034 5.6081 3.97246C5.72397 4.17571 5.87491 4.39284 6.06935 4.5869C6.14285 4.66021 6.14285 4.77871 6.06972 4.85202C6.03316 4.88877 5.98497 4.90715 5.93697 4.90715C5.88897 4.90715 5.84097 4.88877 5.8046 4.8524C5.48678 4.53534 5.2721 4.17046 5.13466 3.8759C5.06285 4.06077 4.96178 4.26365 4.82135 4.44234C4.75741 4.5239 4.63947 4.53834 4.55828 4.47402C4.47672 4.41009 4.46247 4.29215 4.5266 4.21096C4.69797 3.99252 4.80053 3.72271 4.85828 3.52377C4.52753 3.62221 4.2416 3.60796 3.96785 3.48177C3.10891 3.94809 1.56747 6.08634 1.57572 7.82971Z"
                      fill="#64C3C5"
                      stroke="#64C3C5"
                      strokeWidth="0.1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_2979">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0 0.663086)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="detail_text">
                Gross sales :{" "}
                <span className="fw-bold">{eventData.eventRevenue} €</span>
              </span>
            </div>
          </div>
          {eventData.status === "draft" ? (
            <div className="event_card_buttons">
              <button className="btn btn-link p-1">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.336914"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill="#1E3CAA"
                  />
                  <g clipPath="url(#clip0_31_3)">
                    <path
                      d="M17.2916 13.8619C16.9921 13.8619 16.75 14.1046 16.75 14.4035V18.7369C16.75 19.0353 16.5073 19.2785 16.2084 19.2785H8.625C8.32597 19.2785 8.08337 19.0353 8.08337 18.7369V11.1535C8.08337 10.8551 8.32597 10.6119 8.625 10.6119H12.9584C13.2579 10.6119 13.5 10.3692 13.5 10.0703C13.5 9.77124 13.2579 9.52854 12.9584 9.52854H8.625C7.72909 9.52854 7 10.2576 7 11.1535V18.7369C7 19.6328 7.72909 20.3619 8.625 20.3619H16.2084C17.1043 20.3619 17.8334 19.6328 17.8334 18.7369V14.4035C17.8334 14.104 17.5912 13.8619 17.2916 13.8619Z"
                      fill="white"
                    />
                    <path
                      d="M12.0786 13.3685C12.0407 13.4064 12.0152 13.4546 12.0044 13.5065L11.6215 15.4219C11.6036 15.5107 11.6318 15.6023 11.6957 15.6667C11.7471 15.7182 11.8165 15.7458 11.8875 15.7458C11.9047 15.7458 11.9227 15.7442 11.9406 15.7404L13.8554 15.3575C13.9084 15.3466 13.9566 15.3212 13.994 15.2832L18.2797 10.9975L16.3649 9.08282L12.0786 13.3685Z"
                      fill="white"
                    />
                    <path
                      d="M19.6035 7.75844C19.0755 7.23029 18.2164 7.23029 17.6887 7.75844L16.9391 8.50805L18.8539 10.4229L19.6035 9.67315C19.8592 9.41805 20 9.07786 20 8.71604C20 8.35422 19.8592 8.01403 19.6035 7.75844Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_3">
                      <rect
                        width="13"
                        height="13"
                        fill="white"
                        transform="translate(7 7.33691)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="btn btn-link p-1">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.336914"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill="#1E3CAA"
                  />
                  <g clipPath="url(#clip0_210_2)">
                    <path
                      d="M19.3588 10.4153L16.4051 7.46156C16.3241 7.3806 16.2151 7.33691 16.1038 7.33691H11.8288C11.5938 7.33691 11.4029 7.52779 11.4029 7.76288V10.2086H8.95721C8.72212 10.2086 8.53125 10.3994 8.53125 10.6346V20.9109C8.53125 21.146 8.72212 21.3369 8.95721 21.3369H16.1858C16.421 21.3369 16.6119 21.146 16.6119 20.9109V18.4652H19.0575C19.2926 18.4652 19.4835 18.2744 19.4835 18.0392V10.7166C19.4835 10.6083 19.4418 10.4983 19.3588 10.4153ZM18.6316 17.6133H16.6119V13.5884C16.6119 13.478 16.5689 13.3688 16.4871 13.287L13.5334 10.3333C13.4532 10.253 13.3444 10.2085 13.2321 10.2085H12.2549V8.18884H15.6778V10.7166C15.6778 10.9517 15.8687 11.1426 16.1038 11.1426H18.6316V17.6133ZM15.7598 20.485H9.38318V11.0606H12.8061V13.5884C12.8061 13.8235 12.9969 14.0143 13.2321 14.0143H15.7598V20.485ZM13.6581 11.6629L15.1575 13.1623H13.6581V11.6629ZM18.0291 10.2907H16.5297V8.79126C16.7172 8.97861 17.8796 10.1411 18.0291 10.2907Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_210_2">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(7 7.33691)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="btn btn-link p-1">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.000366211"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill="#FF3E6C"
                  />
                  <g clipPath="url(#clip0_31_5)">
                    <path
                      d="M11.3823 8.18218C11.3823 7.79465 11.6847 7.51142 12.0722 7.51142H14.9086C15.296 7.51142 15.5985 7.79465 15.5985 8.18218V8.91683H16.1095V8.18218C16.1095 7.51292 15.5779 7.00037 14.9086 7.00037H12.0722C11.403 7.00037 10.8712 7.51292 10.8712 8.18218V8.91683H11.3823V8.18218Z"
                      fill="white"
                    />
                    <path
                      d="M10.4688 20.0004H16.512C17.0947 20.0004 17.5469 19.4878 17.5469 18.8505V10.9611H9.43384V18.8505C9.43384 19.4878 9.886 20.0004 10.4688 20.0004ZM15.1193 12.1812C15.1193 12.0401 15.2338 11.9256 15.3749 11.9256C15.516 11.9256 15.6304 12.0401 15.6304 12.1812V18.218C15.6304 18.3591 15.516 18.4736 15.3749 18.4736C15.2338 18.4736 15.1193 18.3591 15.1193 18.218V12.1812ZM13.2348 12.1812C13.2348 12.0401 13.3492 11.9256 13.4903 11.9256C13.6315 11.9256 13.7459 12.0401 13.7459 12.1812V18.218C13.7459 18.3591 13.6315 18.4736 13.4903 18.4736C13.3492 18.4736 13.2348 18.3591 13.2348 18.218V12.1812ZM11.3503 12.1812C11.3503 12.0401 11.4647 11.9256 11.6058 11.9256C11.7469 11.9256 11.8614 12.0401 11.8614 12.1812V18.218C11.8614 18.3591 11.7469 18.4736 11.6058 18.4736C11.4647 18.4736 11.3503 18.3591 11.3503 18.218V12.1812Z"
                      fill="white"
                    />
                    <path
                      d="M9.17202 10.45H17.8088C18.1617 10.45 18.4476 10.164 18.4476 9.81118C18.4476 9.45833 18.1617 9.17236 17.8088 9.17236H9.17202C8.81918 9.17236 8.5332 9.45833 8.5332 9.81118C8.5332 10.164 8.81918 10.45 9.17202 10.45Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_5">
                      <rect
                        width="13"
                        height="13"
                        fill="white"
                        transform="translate(7 7.00037)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          ) : (
            <div className="event_card_buttons">
              <button className="btn btn-link p-1">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.336914"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill="#1E3CAA"
                  />
                  <g clipPath="url(#clip0_210_2)">
                    <path
                      d="M19.3588 10.4153L16.4051 7.46156C16.3241 7.3806 16.2151 7.33691 16.1038 7.33691H11.8288C11.5938 7.33691 11.4029 7.52779 11.4029 7.76288V10.2086H8.95721C8.72212 10.2086 8.53125 10.3994 8.53125 10.6346V20.9109C8.53125 21.146 8.72212 21.3369 8.95721 21.3369H16.1858C16.421 21.3369 16.6119 21.146 16.6119 20.9109V18.4652H19.0575C19.2926 18.4652 19.4835 18.2744 19.4835 18.0392V10.7166C19.4835 10.6083 19.4418 10.4983 19.3588 10.4153ZM18.6316 17.6133H16.6119V13.5884C16.6119 13.478 16.5689 13.3688 16.4871 13.287L13.5334 10.3333C13.4532 10.253 13.3444 10.2085 13.2321 10.2085H12.2549V8.18884H15.6778V10.7166C15.6778 10.9517 15.8687 11.1426 16.1038 11.1426H18.6316V17.6133ZM15.7598 20.485H9.38318V11.0606H12.8061V13.5884C12.8061 13.8235 12.9969 14.0143 13.2321 14.0143H15.7598V20.485ZM13.6581 11.6629L15.1575 13.1623H13.6581V11.6629ZM18.0291 10.2907H16.5297V8.79126C16.7172 8.97861 17.8796 10.1411 18.0291 10.2907Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_210_2">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(7 7.33691)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="btn btn-link p-1">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="27" height="27" rx="13.5" fill="#1E3CAA" />
                  <g clipPath="url(#clip0_210_10)">
                    <path
                      d="M13.9999 16.5599C15.5982 16.5599 16.8967 15.2613 16.8967 13.6631C16.8967 12.0649 15.5982 10.7663 13.9999 10.7663C12.4017 10.7663 11.1032 12.0649 11.1032 13.6631C11.1032 15.2613 12.4017 16.5599 13.9999 16.5599ZM14.2197 14.5221C14.5793 14.5221 14.879 14.2225 14.879 13.8629H15.8379C15.8179 14.7619 15.0987 15.4811 14.2197 15.4811V14.5221Z"
                      fill="white"
                    />
                    <path
                      d="M5.20977 14.2624C6.18868 15.4811 9.68479 19.4566 14 19.4566C18.3152 19.4566 21.8113 15.4811 22.7902 14.2624C23.0699 13.9228 23.0699 13.4234 22.7902 13.0638C21.8113 11.8451 18.3152 7.86952 14 7.86952C9.68479 7.86952 6.18868 11.8451 5.20977 13.0638C4.93008 13.4034 4.93008 13.9028 5.20977 14.2624ZM14 9.46775C16.3174 9.46775 18.1953 11.3457 18.1953 13.6631C18.1953 15.9805 16.3174 17.8584 14 17.8584C11.6826 17.8584 9.80466 15.9805 9.80466 13.6631C9.80466 11.3457 11.6826 9.46775 14 9.46775Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_210_10">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="matrix(-1 0 0 -1 23 22.6631)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}