package cn.fastloader.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import cn.fastloader.web.model.QueryInfo;
import cn.fastloader.web.model.TFileInfo;

@Mapper
public interface TFileInfoMapper {
	
    int deleteByPrimaryKey(String id);

    int insert(TFileInfo record);

    int insertSelective(TFileInfo record);

    TFileInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(TFileInfo record);

    int updateByPrimaryKey(TFileInfo record);

	List<TFileInfo> selectFileByParams(TFileInfo fileInfo);
	
	List<TFileInfo> selectFileList(QueryInfo  query);

}