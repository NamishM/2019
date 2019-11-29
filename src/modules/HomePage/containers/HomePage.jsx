import { connect } from 'react-redux';
import {
  onItemsRequest,
  onItemsDeleteRequest,
  onItemsUpdateRequest
} from '../../../redux/actions/Actions';
import HomePageUI from '../components/HomePageUI';

const mapStateToProps = (state, ownProps) => ({
  isDesktopLayout: state.browser.screenLayout === "desktop",
  isTabletLayout: state.browser.screenLayout === "tablet",
  listingItems: state.app.listing.items,
  isLoading: state.app.listing.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  onItemsRequest: () =>
    dispatch(onItemsRequest()),
  onItemsDeleteRequest: () =>
    dispatch(onItemsDeleteRequest()),
  onItemsUpdateRequest: (item) =>
    dispatch(onItemsUpdateRequest(item)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageUI);
